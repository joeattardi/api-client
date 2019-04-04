import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  background: #A40802;
  color: white;
  border-radius: 5px;
  padding: 0 0.5em;
`;

export default function Badge({ text }) {
  return (
    <Container>{text}</Container>
  );
}
