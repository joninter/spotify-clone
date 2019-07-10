import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock das antigas</strong>
        <p>Relaxe enquanto ouve apenas os melhores musicas do rock</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock das antigas</strong>
        <p>Relaxe enquanto ouve apenas os melhores musicas do rock</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock das antigas</strong>
        <p>Relaxe enquanto ouve apenas os melhores musicas do rock</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock das antigas</strong>
        <p>Relaxe enquanto ouve apenas os melhores musicas do rock</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
