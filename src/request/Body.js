import React, { Component } from 'react';
import styled from 'styled-components';

import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const Editor = styled(CodeMirror)`
  border: 1px solid #CCCCCC;
`;

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(editor, data, value) {
    this.props.onChange(value);
  }

  render() {
    const editorOptions = {
      mode: {
        name: 'javascript',
        json: true
      },
      lineNumbers: true
    };

    return (
      <Editor
        value={this.props.body}
        onBeforeChange={this.handleChange}
        options={editorOptions} />
    );
  }
}
