import React from 'react';
import { Link } from 'react-router-dom';
import { Pokeball } from '../Pokeball';

import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <div className='title'>
          <Pokeball fill='#fff'/>
          <h1>Pokedex</h1>
        </div>
      </Link>
    </Container>
  );
}
