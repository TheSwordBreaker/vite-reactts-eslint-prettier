import React, { useState } from 'react';
import styled from 'styled-components';

import crab from './crab.svg';

const StylishCrab = styled.img`
  max-width: 100px;
`;

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  transition: background-color 0.1s ease;
  color: #4682b4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4682b4;
  border-radius: 4px;
  display: block;
  min-width: 160px;
  &:hover {
    background-color: #4682b430;
  }
  &:active {
    border-left: 2px solid #245782;
    border-bottom: 2px solid #245782;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CenterBox>
        <StylishCrab src={crab} alt="crab emoji" />
        <Button onClick={() => setCount((count) => count + 1)}>
          Clicked {count} time{count !== 1 ? 's' : ''}
        </Button>
        <StylishCrab src={crab} alt="crab emoji" />
      </CenterBox>
    </>
  );
}
