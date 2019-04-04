import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ContentContainer = styled.div`
  margin: 0.5em;
`;

const Title = styled.span`
  font-size: 0.9em;
  font-weight: bold;
`;

const Trigger = styled.div`
  cursor: pointer;
  user-select: none;
`;

export default class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open || false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Trigger onClick={this.toggle}>
          <FontAwesomeIcon icon={this.state.open ? 'caret-down' : 'caret-right'} fixedWidth={true} />
          <Title>{this.props.title}</Title>
        </Trigger>
        <ContentContainer>{this.state.open ? this.props.children : null}</ContentContainer>
      </div>
    );
  }
}
