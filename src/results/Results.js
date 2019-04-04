import React, { Component } from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import Body from './Body';
import Collapsible from '../Collapsible';
import Headers from './Headers';
import Summary from './Summary';

import { getContentType } from '../utils';

const Container = styled.div`
  width: 100%;
  background: #EFEFEF;
  border: 1px solid #999999;
  border-radius: 5px;
  margin: 0.5em;
`;

const Title = styled.h2`
  align-self: flex-start;
  margin: 0;
  font-size: 1.2em;
`;

export default class Results extends Component {
  render() {


    const headersTitle = (
      <span>
        Headers <Badge text={Object.keys(this.props.response.headers).length} />
      </span>
    );

    const bodyTitle = (
      <span>
        Body <Badge text={getContentType(this.props.response)} />
      </span>
    );

    return (
      <>
        <Title>Response</Title>
        <Container>
          <Summary response={this.props.response} />
          <Collapsible open={true} title={headersTitle}>
            <Headers headers={this.props.response.headers} />
          </Collapsible>
          <Collapsible open={true} title={bodyTitle}>
            <Body response={this.props.response} />
          </Collapsible>
        </Container>
      </>
    );
  }
}
