import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from '../IconButton';

const Input = styled.input`
  margin-right: 0.5em;
  width: 25%;
`;

const Form = styled.form`
  display: flex;
  margin-top: 0.2em;
  align-items: center;
`;

export default class AddNameValuePairForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      value: ''
    };

    this.nameRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddItem({
      name: this.state.name,
      value: this.state.value
    });

    this.setState({
      name: '',
      value: ''
    });

    this.nameRef.current.focus();
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeValue(event) {
    this.setState({ value: event.target.value });
  }

  get isValid() {
    return this.state.name && this.state.value;
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          ref={this.nameRef}
          value={this.state.name}
          onChange={this.handleChangeName}
          placeholder="Name" />
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeValue}
          placeholder="Value" />
        <IconButton disabled={!this.isValid}>
          <FontAwesomeIcon icon="plus-square" fixedWidth={true} />
        </IconButton>
      </Form>
    );
  }
}
