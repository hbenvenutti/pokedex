import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App'
import { PokemonsProvider } from './hooks/use_pokemons';
import { Router } from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonsProvider>
        <Router/>
        <App />
      </PokemonsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
