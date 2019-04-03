import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Header from './Header';
import UrlEntry from './UrlEntry';

library.add(faCode);

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <UrlEntry onSend={sendRequest} />
        </main>
      </div>
    );
  }
}

function sendRequest(requestConfig) {
  console.log(`Send ${requestConfig.method} request to ${requestConfig.url}!`);
}
