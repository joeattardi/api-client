import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  color: #356079;
  border: none;
  background: transparent;
  padding: 0;
  font-size: 1em;

  &:hover {
    color: #000000;
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;

    &:hover {
      background: transparent;
      color: #356079;
    }
  }
`;
