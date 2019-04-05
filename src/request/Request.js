import React, { Component } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import NameValueList from './NameValueList';
import UrlEntry from './UrlEntry';

const Title = styled.h2`
  align-self: flex-start;
  margin: 0;
  font-size: 1.2em;
`;

const Container = styled.div`
  background: #EFEFEF;
  border: 1px solid #999999;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em;
  margin: 0.5em;
`;

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: []
    };

    this.updateHeaders = this.updateHeaders.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  updateHeaders(headers) {
    this.setState({ headers });
  }

  sendRequest(requestConfig) {
    this.props.onSend({
      ...requestConfig,
      headers: this.state.headers
    });
  }

  render() {
    return (
      <>
        <Title>Request</Title>
        <Container>
          <UrlEntry onSend={this.sendRequest} />
          <Tabs>
            <TabList>
              <Tab>Headers</Tab>
            </TabList>
            <TabPanel>
              <NameValueList onChange={this.updateHeaders} />
            </TabPanel>
          </Tabs>
        </Container>
      </>
    );
  }
}
