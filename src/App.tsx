import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { PokemonList } from './pages/Pokemon-List/PokemonList';
import { PokemonsProvider } from './hooks/use_pokemons';
import { Content } from './styles/App.styles';

import { GlobalStyle } from './styles/Global';
import { NotFound } from './pages/Not-Found/NotFound';
import { PokemonPage } from './pages/Pokemon-Page/PokemonPage';

function App() {

  return (
    <>
      <PokemonsProvider>
        <GlobalStyle/>
          <Header/>
          <Content>
            <main>
              <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemons/:id" element={<PokemonPage/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </Content>
      </PokemonsProvider>
    </>
  )
}

export default App;
