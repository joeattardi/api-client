import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCaretRight, faCaretDown, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import 'react-tabs/style/react-tabs.css';
import './App.css';

import Header from './Header';
import Request from './request/Request';
import Results from './results/Results';

const { ipcRenderer } = window.require('electron');

library.add(faCode, faCaretRight, faCaretDown, faPlusSquare, faTimes);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
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
          <Request onSend={this.sendRequest} />
          { this.state.loading ? <Loader type="Oval" color="#333333" width={80} height={80} /> : null}
          { this.state.response ? <Results response={this.state.response} /> : null}
        </Main>
      </div>
    );
  }
}
