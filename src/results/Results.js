import React, { Component } from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import Body from './Body';
import Collapsible from '../Collapsible';
import Headers from './Headers';
import Summary from './Summary';

const Container = styled.div`
  width: 90%;
  background: #EFEFEF;
  border: 1px solid #999999;
  border-radius: 5px;
`;

export default class Results extends Component {
  render() {
    const headersTitle = (
      <span>
        Headers <Badge text={Object.keys(this.props.response.headers).length} />
      </span>
    );

    return (
      <Container>
        <Summary response={this.props.response} />
        <Collapsible open={true} title={headersTitle}>
          <Headers headers={this.props.response.headers} />
        </Collapsible>
        <Collapsible open={true} title="Body">
          <Body response={this.props.response} />
        </Collapsible>
      </Container>
    );
  }
}
