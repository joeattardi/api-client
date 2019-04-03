import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 0.5em;
  overflow: scroll;
`;

export default class Results extends Component {
  prettyPrintJSON(json) {
    return JSON.stringify(JSON.parse(json), null, 2);
  }

  render() {
    return (
      <Container>
        <pre>
          {this.prettyPrintJSON(this.props.response)}
        </pre>
      </Container>
    );
  }
}
