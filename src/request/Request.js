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

    this.addItemHandler = this.addItemHandler.bind(this);
    this.changeItemHandler = this.changeItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);

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

  addItemHandler(key) {
    return ({ name, value }) => {
      this.setState({
        [key]: [
          ...this.state[key],
          { name, value }
        ]
      });
    };
  }

  changeItemHandler(key) {
    return ({ name, value, index}) => {
      this.setState({
        [key]: this.state[key].map((item, i) => {
          if (i === index) {
            return { name, value };
          }
  
          return item;
        })
      });
    };
  }

  deleteItemHandler(key) {
    return index => {
      this.setState({
        [key]: this.state[key].filter((item, i) => i !== index)
      });
    };
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
                onAddItem={this.addItemHandler('queryParams')}
                onChangeItem={this.changeItemHandler('queryParams')}
                onDeleteItem={this.deleteItemHandler('queryParams')} />
            </TabPanel>
            <TabPanel>
              <NameValueList 
                items={this.state.headers}
                onAddItem={this.addItemHandler('headers')}
                onChangeItem={this.changeItemHandler('headers')}
                onDeleteItem={this.deleteItemHandler('headers')} />
            </TabPanel>
          </Tabs>
        </Container>
      </>
    );
  }
}
