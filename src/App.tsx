import React from 'react';

import { PokemonsProvider } from './hooks/use_pokemons';
import { Content } from './styles/App.styles';

import { GlobalStyle } from './styles/Global';

function App() {

  return (
    <>
      <PokemonsProvider>
        <GlobalStyle/>
          <Content>
            <main>
            </main>
          </Content>
      </PokemonsProvider>
    </>
  )
}

export default App;
