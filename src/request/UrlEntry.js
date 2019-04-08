import React from 'react';

import Select from 'react-select';
import styled from 'styled-components';

import validUrl from 'valid-url';

import ErrorMessage from '../ErrorMessage';

const HTTP_METHODS = [
  'DELETE',
  'GET',
  'HEAD',
  'OPTIONS',
  'PATCH',
  'POST',
  'PUT'
];

const Container = styled.form`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
  flex-grow: 1;
  margin: 0.5em;

  &.error {
    border: 1px solid #FF0033;
  }
`;

const StyledSelect = styled(Select)`
  width: 8em;
  z-index: 999;
`;

const methodOptions = HTTP_METHODS.map(method => ({ value: method, label: method }));

export default class UrlEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      method: methodOptions[1],
      valid: false,
      validUrl: false,
      touchedUrl: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSend({
      url: this.state.url,
      method: this.state.method.value
    });
  }

  handleUrlChange(event) {
    const isValidUrl = validUrl.isWebUri(event.target.value);

    this.setState({
      url: event.target.value,
      valid: !!event.target.value && isValidUrl,
      validUrl: isValidUrl
    });
  }

  handleMethodChange(method) {
    this.setState({ method });
  }

  handleBlur() {
    console.log('BLUR');
    this.setState({ touchedUrl: true });
  }

  hasUrlError() {
    return !this.state.validUrl && this.state.touchedUrl;
  }

  render() {
    return (
      <>
        {this.hasUrlError() ? <ErrorMessage>Invalid URL</ErrorMessage> : null}
        <Container onSubmit={this.handleSubmit}>
            <StyledSelect options={methodOptions} value={this.state.method} onChange={this.handleMethodChange} />
            <Input
              type="text"
              value={this.state.url}
              onChange={this.handleUrlChange}
              onBlur={this.handleBlur}
              className={this.hasUrlError() ? 'error' : ''} />
            <button type="submit" disabled={!this.state.valid}>Go</button>
        </Container>
      </>
    );
  }
}
