import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: scroll;
  height: 50vh;
  background: #FFFFFF;
  border: 1px solid #333333;
  padding: 0.5em;
`;

const WrappedPre = styled.pre`
  white-space: pre-wrap;
  word-break: keep-all;
  margin: 0;
`;

export default function RawResults({ response }) {
  return (
    <Container>
      <WrappedPre>{response.body}</WrappedPre>
    </Container>
  );
}
