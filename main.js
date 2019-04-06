// Modules to control application life and create native browser window
const path = require('path');

const { app, BrowserWindow, ipcMain, net } = require('electron');

const isDev = require('electron-is-dev');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const { version } = require('./package.json');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`);

  if (isDev) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  mainWindow.maximize();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

ipcMain.on('sendRequest', (event, args) => {
  let start;

  let url = new URL(args.url);

  if (args.queryParams.length) {
    const params = new URLSearchParams();
    args.queryParams.forEach(({ name, value }) => params.append(name, value));
    url.search = params.toString();
  }

  const request = net.request({
    method: args.method,
    url: url.toString()
  });

  request.setHeader('User-Agent', `APIClient/${version}`);

  args.headers.forEach(header => request.setHeader(header.name, header.value));

  request.on('response', response => {
    let responseBody = '';
    response.on('data', chunk => {
      responseBody += chunk;
    });

    response.on('end', () => {
      event.sender.send('response', {
        body: responseBody,
        status: response.statusCode,
        statusMessage: response.statusMessage,
        time: Date.now() - start,
        headers: response.headers
      });
    })
  });

  start = Date.now();
  request.end();
});
