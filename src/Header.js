import React from 'react';

import styled from 'styled-components';

import { version } from '../package.json';

const HeaderContainer = styled.header`
  background: #356079;
  border-bottom: 1px solid #022D46;
  color: #FFFFFF;
  padding: 0.5em;

  h1 {
    margin: 0;
    font-size: 1.5em;
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
        <Title>API Client</Title>
        <Version>{version}</Version>
      </h1>
    </HeaderContainer>
  );
}
