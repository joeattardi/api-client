import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 0.8em;
  display: flex;
  padding: 0.5em;
`;

const Section = styled.div`
  margin-right: 0.5em;
`;

export default function Summary({ response }) {
  return (
    <Container>
      <Section>Status: <strong>{response.status} {response.statusMessage}</strong></Section>
      <Section>Time: <strong>{response.time} ms</strong></Section>
    </Container>
  );
}
