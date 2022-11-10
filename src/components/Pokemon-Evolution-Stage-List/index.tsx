import { Link } from "react-router-dom";
import {CaretRight} from 'phosphor-react'

import { Evolution } from "../../providers/api/pokeapi"
import { PokemonEvolutionStageListContainer } from "./styles";

interface PokemonEvolutionStageListProps {
  list: Evolution[];
}

export const PokemonEvolutionStageList = ({list}: PokemonEvolutionStageListProps) => {
  return (
    <PokemonEvolutionStageListContainer className="stage">
    {
      list.map(pokemon => 
        <div className='pokemon' key={pokemon.pokemonId}>
          <Link key={pokemon.pokemonId} to={`/pokemons/${pokemon.pokemonId}`}>
            <img src={pokemon.art} alt="" />
            <span>{pokemon.how}</span>
          </Link>
          <CaretRight weight="bold"/>
        </div>
      )
    }
  </PokemonEvolutionStageListContainer>
  )
}
