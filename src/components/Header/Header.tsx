import React from 'react';

import pokeball from '../../assets/pokeball-white.svg'
import { Pokeball } from '../Pokeball/Pokeball';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div className='title'>
        <Pokeball fill='#fff'/>
        <h1>Pokedex</h1>
      </div>
    </Container>
  );
}
