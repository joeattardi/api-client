import React, { Component } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import RawResults from './RawResults';
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
  padding: '0.5em',
  height: '50vh',
  overflow: 'scroll'
};

export default class Results extends Component {
  prettyPrintJSON(json) {
    return JSON.stringify(JSON.parse(json), null, 2);
  }

  render() {
    return (
      <Container>
        <Summary response={this.props.response} />
        <Tabs>
          <TabList>
            <Tab>Pretty</Tab>
            <Tab>Raw</Tab>
          </TabList>
          <TabPanel>
            <SyntaxHighlighter language="json" customStyle={resultStyles}>
              {this.prettyPrintJSON(this.props.response.body)}
            </SyntaxHighlighter>
          </TabPanel>
          <TabPanel>
            <RawResults response={this.props.response} />
          </TabPanel>
        </Tabs>
      </Container>
    );
  }
}
