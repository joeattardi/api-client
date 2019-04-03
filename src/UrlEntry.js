import React from 'react';

import Select from 'react-select';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0.5em;
  display: flex;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 0.5em;
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
  width: 10em;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 5px;
  background: #022D46;
  color: #FFFFFF;
  font-weight: bold;

  &:hover {
    background: #356079;
  }
`;

const methods = [
  { value: 'GET', label: 'GET' },
  { value: 'POST', label: 'POST' },
  { value: 'PUT', label: 'PUT' }
];

export default function UrlEntry(props) {
  return (
    <Container>
      <StyledSelect options={methods} value={methods[0]}/>
      <Input type="text" />
      <Button>Go</Button>
    </Container>
  );
}
