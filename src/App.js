import React from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './Components/Sidebar/index';
import Player from './Components/Player/index';
import { Wrapper, Container } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
