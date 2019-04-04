import React, { Component } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactJson from 'react-json-view';

import Summary from './Summary';

const Container = styled.div`
  width: 90%;
  background: #EFEFEF;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 0.5em;
  overflow: scroll;
`;

const resultStyles = {
  background: '#FFFFFF',
  border: '1px solid #333333',
  padding: '0.5em'
};

export default class Results extends Component {
  prettyPrintJSON(json) {
    return JSON.stringify(JSON.parse(json), null, 2);
  }

  render() {
    return (
      <Container>
        <Summary response={this.props.response} />
        <ReactJson 
          src={JSON.parse(this.props.response.body)} 
          name={false} style={resultStyles}
          enableClipboard={false}
          displayObjectSize={false}
          displayDataTypes={false} />
      </Container>
    );
  }
}
