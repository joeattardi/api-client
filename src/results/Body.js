import React, { Component } from 'react';

import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import RawResults from './RawResults';

const Container = styled.div`
  padding: 0.5em;
  overflow: scroll;
`;

const resultStyles = {
  background: '#FFFFFF',
  border: '1px solid #333333',
  padding: '0.5em',
  height: '50vh',
  overflow: 'scroll'
};

const languages = {
  'application/json': 'json',
  'application/xml': 'xml',
  'text/html': 'html'
};


export default class Body extends Component {
  prettyPrintJSON(json) {
    return JSON.stringify(JSON.parse(json), null, 2);
  }

  getPrettyBody() {
    let [contentType] = this.props.response.headers['content-type'];
    if (contentType.includes(';')) {
      contentType = contentType.substring(0, contentType.indexOf(';'));
    }

    let body = this.props.response.body;
    if (contentType === 'application/json') {
      body = this.prettyPrintJSON(body);
    }

    const language = languages[contentType] || 'text';

    return (
      <SyntaxHighlighter language={language} customStyle={resultStyles}>
        {body}
      </SyntaxHighlighter>
    );
  }

  render() {
    return (
      <Container>
        <Tabs>
          <TabList>
            <Tab>Pretty</Tab>
            <Tab>Raw</Tab>
          </TabList>
          <TabPanel>
            {this.getPrettyBody()}
          </TabPanel>
          <TabPanel>
            <RawResults response={this.props.response} />
          </TabPanel>
        </Tabs>
      </Container>
    );
  }
}
