import React from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './Components/Sidebar/index';
import Player from './Components/Player/index';
import Header from './Components/Header';
import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
