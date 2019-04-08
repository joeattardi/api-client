import React, { Component } from 'react';
import styled from 'styled-components';

import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

import Select from 'react-select';

const Editor = styled(CodeMirror)`
  border: 1px solid #CCCCCC;
`;

const StyledSelect = styled(Select)`
  width: 8em;
  z-index: 999;
  margin: 0.25em;
`;

const bodyContentTypeOptions = [
  { value: 'text/html', label: 'HTML' },
  { value: 'application/json', label: 'JSON' },
  { value: 'text/plain', label: 'Plain Text' },
  { value: 'text/xml', label: 'XML' }
];

const editorModes = {
  'application/json': {
    name: 'javascript',
    json: true
  },
  'text/html': {
    name: 'xml',
    htmlMode: true
  },
  'text/plain': null,
  'text/xml': {
    name: 'xml'
  }
};

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentType: bodyContentTypeOptions[1]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleContentTypeChange = this.handleContentTypeChange.bind(this);
  }

  handleChange(editor, data, value) {
    this.props.onChange(value);
  }

  get editorOptions() {
    return {
      lineNumbers: true,
      mode: editorModes[this.state.contentType.value]
    }
  }

  handleContentTypeChange(contentType) {
    this.setState({ contentType });
    this.props.onContentTypeChange(contentType.value);
  }

  render() {
    return (
      <div>
        <StyledSelect
          options={bodyContentTypeOptions}
          onChange={this.handleContentTypeChange}
          value={this.state.contentType} />
        <Editor
          value={this.props.body}
          onBeforeChange={this.handleChange}
          options={this.editorOptions} />
      </div>
    );
  }
}
