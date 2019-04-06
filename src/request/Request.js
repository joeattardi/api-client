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
      headers: [],
      queryParams: []
    };

    this.updateHeaders = this.updateHeaders.bind(this);

    this.addHeader = this.addHeader.bind(this);
    this.changeHeader = this.changeHeader.bind(this);
    this.deleteHeader = this.deleteHeader.bind(this);

    this.addQueryParam = this.addQueryParam.bind(this);
    this.changeQueryParam = this.changeQueryParam.bind(this);
    this.deleteQUeryParam = this.deleteQueryParam.bind(this);

    this.sendRequest = this.sendRequest.bind(this);
  }

  updateHeaders(headers) {
    this.setState({ headers });
  }

  sendRequest(requestConfig) {
    this.props.onSend({
      ...requestConfig,
      headers: this.state.headers,
      queryParams: this.state.queryParams
    });
  }

  addHeader({ name, value }) {
    this.setState({
      headers: [
        ...this.state.headers,
        { name, value }
      ]
    });
  }

  changeHeader({ name, value, index }) {
    this.setState({
      headers: this.state.headers.map((header, i) => {
        if (i === index) {
          return { name, value };
        }

        return header;
      })
    });
  }

  deleteHeader(index) {
    this.setState({
      headers: this.state.headers.filter((header, i) => i !== index)
    });
  }

  addQueryParam({ name, value }) {
    this.setState({
      queryParams: [
        ...this.state.queryParams,
        { name, value }
      ]
    });
  }

  changeQueryParam({ name, value, index }) {
    this.setState({
      queryParams: this.state.queryParams.map((queryParam, i) => {
        if (i === index) {
          return { name, value };
        }

        return queryParam;
      })
    });
  }

  deleteQueryParam(index) {
    this.setState({
      queryParams: this.state.queryParams.filter((queryParam, i) => i !== index)
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
              <Tab>Query Params</Tab>
              <Tab>Headers</Tab>
            </TabList>
            <TabPanel>
              <NameValueList
                items={this.state.queryParams}
                onAddItem={this.addQueryParam}
                onChangeItem={this.changeQueryParam}
                onDeleteItem={this.deleteQueryParam} />
            </TabPanel>
            <TabPanel>
              <NameValueList 
                items={this.state.headers}
                onAddItem={this.addHeader}
                onChangeItem={this.changeHeader}
                onDeleteItem={this.deleteHeader} />
            </TabPanel>
          </Tabs>
        </Container>
      </>
    );
  }
}
