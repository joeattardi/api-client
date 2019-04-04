import React from 'react';

import Select from 'react-select';
import styled from 'styled-components';

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
  background: #EFEFEF;
  margin: 0.5em;
  display: flex;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 0.5em;
  width: 90%;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
  flex-grow: 1;
  margin: 0.5em;
`;

const StyledSelect = styled(Select)`
  width: 8em;
`;

const methodOptions = HTTP_METHODS.map(method => ({ value: method, label: method }));

export default class UrlEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'http://httpbin.org/get',
      method: { value: 'GET', label: 'GET' }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSend({
      url: this.state.url,
      method: this.state.method.value
    });
  }

  handleUrlChange(event) {
    this.setState({
      url: event.target.value
    })
  }

  handleMethodChange(method) {
    this.setState({ method });
  }

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
          <StyledSelect options={methodOptions} value={this.state.method} onChange={this.handleMethodChange} />
          <Input type="text" value={this.state.url} onChange={this.handleUrlChange} />
          <button type="submit">Go</button>
      </Container>
    );
  }
}
