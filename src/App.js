import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Header from './Header';
import UrlEntry from './UrlEntry';

library.add(faCode);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <UrlEntry />
        </main>
      </div>
    );
  }
}

export default App;
