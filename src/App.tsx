import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/Pokemon-List/PokemonList';
import { PokemonsProvider } from './hooks/use_pokemons';
import { Content } from './styles/App.styles';

import { GlobalStyle } from './styles/Global';

function App() {

  return (
    <>
      <PokemonsProvider>
        <GlobalStyle/>
        <Header/>
        <Content>
          <main>
            <PokemonList />
          </main>
        </Content>

      </PokemonsProvider>
    </>
  )
}

export default App
