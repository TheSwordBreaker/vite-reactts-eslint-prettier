import React from 'react';
import styled from 'styled-components';

import CrabButton from './components/CrabButton';

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const App = (): JSX.Element => {
  return (
    <>
      <CenterBox>
        <CrabButton />
      </CenterBox>
    </>
  );
};

export default App;
