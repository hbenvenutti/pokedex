import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/default"
import { NotFound } from "./pages/Not-Found/NotFound"
import { PokemonList } from "./pages/Pokemon-List/PokemonList"
import { PokemonPage } from "./pages/Pokemon-Page/PokemonPage"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<PokemonPage/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
