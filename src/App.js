import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import './App.css';
import Header from './Header';
import Results from './Results';
import UrlEntry from './UrlEntry';

const { ipcRenderer } = window.require('electron');

library.add(faCode);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      response: null
    };

    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest(requestConfig) {
    this.setState({ loading: true, response: null });
    ipcRenderer.once('response', (event, args) => {
      this.setState({ loading: false, response: args });
    });
  
    ipcRenderer.send('sendRequest', requestConfig);
  }

  render() {
    return (
      <div>
        <Header />
        <Main>
          <UrlEntry onSend={this.sendRequest} />
          { this.state.loading ? <Loader type="Oval" color="#333333" width={80} height={80} /> : null}
          { this.state.response ? <Results response={this.state.response} /> : null}
        </Main>
      </div>
    );
  }
}
