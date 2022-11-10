import { Link } from "react-router-dom";
import {CaretRight} from 'phosphor-react'

import { Evolution } from "../../providers/api/pokeapi"
import { PokemonEvolutionStageListContainer } from "./styles";

interface PokemonEvolutionStageListProps {
  list: Evolution[];
  last?: boolean;
}

export const PokemonEvolutionStageList = ({list, last=false}: PokemonEvolutionStageListProps) => {
  return (
    <PokemonEvolutionStageListContainer className="stage">
    {
      list.map(pokemon => 
        <div className='pokemon' key={pokemon.pokemonId}>
          <Link key={pokemon.pokemonId} to={`/pokemons/${pokemon.pokemonId}`}>
            <div className="image"><img src={pokemon.art} alt="" /></div>
            <span>{pokemon.how}</span>
          </Link>
        </div>
      )
    }
  </PokemonEvolutionStageListContainer>
  )
}
