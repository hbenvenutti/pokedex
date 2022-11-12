import React from 'react';

import { usePokemons } from "../../hooks/use_pokemons";
import { EvolutionLineContainer } from "./styles";
import { PokemonEvolutionStageList } from '../Pokemon-Evolution-Stage-List';
import { CaretRight } from 'phosphor-react';

export const EvolutionLine = () => {
  const {evolutionLine} = usePokemons();

  return (
    <EvolutionLineContainer>
      <h2>Linha Evolutiva</h2>
      <div className='evolutions'>
        {
          evolutionLine.babyStage.length > 0  &&
            <>
              <PokemonEvolutionStageList list={evolutionLine.babyStage}/>
              <CaretRight weight="bold"/>
            </>
        }
        
        <PokemonEvolutionStageList list={evolutionLine.firstStage}/>

        {
          evolutionLine.secondStage.length > 0 &&
            <>
              <CaretRight weight="bold"/>
              <PokemonEvolutionStageList list={evolutionLine.secondStage}/>
            </>
        }
        
        {
          evolutionLine.thirdStage.length > 0 && 
            <>
              <CaretRight weight="bold"/>
              <PokemonEvolutionStageList last list={evolutionLine.thirdStage}/>
            </>
        }
      </div>

    </EvolutionLineContainer>
  );
}
