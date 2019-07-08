import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Seach" />
    </Search>
    <User>
      <img src="https://avatars0.githubusercontent.com/u/38142909?v=4" alt="Avatar" />
      Jonatan Machado
    </User>
  </Container>
);

export default Header;
