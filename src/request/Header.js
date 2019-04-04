import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from '../IconButton';

const Input = styled.input`
  margin-right: 0.5em;
  width: 25%;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDelete: false
    };

    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  showDelete() {
    this.setState({
      showDelete: true
    })
  }

  hideDelete() {
    this.setState({
      showDelete: false
    })
  }

  onChangeName(event) {
    this.props.onChange({
      name: event.target.value,
      value: this.props.value,
      index: this.props.index
    });
  }

  onChangeValue(event) {
    this.props.onChange({
      name: this.props.name,
      value: event.target.value,
      index: this.props.index
    });
  }

  onDelete() {
    this.props.onDelete(this.props.index);
  }

  renderDeleteButton() {
    return (
      <IconButton onClick={this.onDelete}>
        <FontAwesomeIcon icon="times" fixedWidth={true} />
      </IconButton>
    );
  }

  render() {
    return (
      <div onMouseOver={this.showDelete} onMouseLeave={this.hideDelete}>
        <Input
          type="text"
          onChange={this.onChangeName}
          value={this.props.name} />
        <Input
          type="text"
          onChange={this.onChangeValue}
          value={this.props.value} />
        {this.state.showDelete ? this.renderDeleteButton(): null}
      </div>
    );
  }
}
