import React, { useState } from 'react';
import styled from 'styled-components';

import crab from './crab.svg';

const StylishCrab = styled.img`
  max-width: 100px;
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
    cursor: pointer;
  }
  &:active {
    border-left: 2px solid #245782;
    border-bottom: 2px solid #245782;
  }
`;

const CrabButton = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((count) => count + 1);

  return (
    <>
      <Button onClick={handleClick}>
        <StylishCrab src={crab} alt="crab emoji" />
        Clicked {count} time{count !== 1 ? 's' : ''}
      </Button>
    </>
  );
};

export default CrabButton;
