import React from 'react';

import { Link } from "react-router-dom";

import { usePokemons } from "../../hooks/use_pokemons";
import { EvolutionLineContainer } from "./styles";
import { PokemonEvolutionStageList } from '../Pokemon-Evolution-Stage-List';

export const EvolutionLine = () => {
  const {evolutionLine} = usePokemons();

  return (
    <EvolutionLineContainer>
      <PokemonEvolutionStageList list={evolutionLine.babyStage}/>
      <PokemonEvolutionStageList list={evolutionLine.firstStage}/>
      <PokemonEvolutionStageList list={evolutionLine.secondStage}/>
      <PokemonEvolutionStageList list={evolutionLine.thirdStage}/>
    </EvolutionLineContainer>
  );
}
