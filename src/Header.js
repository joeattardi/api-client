import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { version } from '../package.json';

const HeaderContainer = styled.header`
  background: #356079;
  border-bottom: 1px solid #022D46;
  color: #FFFFFF;
  padding: 0.5em;

  h1 {
    margin: 0;
  }
`;

const Title = styled.span`
  margin-left: 0.25em;
`;

const Version = styled.span`
  margin-left: 0.25em;
  font-size: 0.5em;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <h1>
        <FontAwesomeIcon icon="code" />
        <Title>API Client</Title>
        <Version>{version}</Version>
      </h1>
    </HeaderContainer>
  );
}
