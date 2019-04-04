import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  background: #FF0033;
  color: #FFFFFF;
  padding: 0.5em;
  border-radius: 5px;
`;

export default function ErrorMessage({ children }) {
  return (
    <Container>
      <FontAwesomeIcon icon="exclamation-triangle" />
      &nbsp;
      {children}
    </Container>
  );
}
