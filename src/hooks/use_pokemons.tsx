import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokeApi, Stat, PokeType, Variety } from "../providers/api/pokeapi";
import { getIdFromURL } from "../utils/get_id_from_url";

interface PokemonsContextData {
  pokemons: PokemonList;
  updatePokemons: (region: string) => Promise<void>;
  search: (value: string) => Promise<void>;
}

interface PokemonsProps {
  children: ReactNode;
}

export interface Pokemon {
  id: number;
  stats: Stat[];
  types: string[];
  varieties?: Variety[];
  name: string;
  url?: string;
}

export type PokemonList = Pokemon[];

const PokemonsContext = createContext<PokemonsContextData>({} as PokemonsContextData);

export const PokemonsProvider = ({children}: PokemonsProps) => {
  const [pokemons, setPokemons] = useState<PokemonList>([]);
  const pokeApi = PokeApi.getInstance();

  // *** ------------------------------------------------------------------------------------ *** //

  const regions = {
    kanto: {limit: 151, offset: 0},
    johto: {limit: 100, offset: 151},
    hoenn: {limit: 135, offset: 251},
    sinnoh: {limit: 107, offset: 386},
    unova: {limit: 156, offset: 493}
  }

  // *** ------------------------------------------------------------------------------------ *** //

  const getGenData = (region: string) => {
    const { limit, offset } = regions[region as keyof typeof regions];

    return {limit, offset};
  }

  // *** ------------------------------------------------------------------------------------ *** //

  const getPokemonGeneration = async (region: string, limit: number, offset: number) => {
    const cache = localStorage.getItem(region);
    const pokemonList = []
    console.log('cache', cache)

    if (!cache) {
      const response = await pokeApi.listPokemon(limit, offset);

      for (let i=0; i < response.length; i++) {
        const id = getIdFromURL(response[i].url);
        const {stats, types, name} = await pokeApi.getPokemonInfo(id);
        pokemonList.push({id, name, stats, types});
      }

      localStorage.setItem(region, JSON.stringify(pokemonList));
      setPokemons(pokemonList);
      
      return;
    }

    setPokemons(JSON.parse(cache));
  }

  useEffect(() => {
    updatePokemons('kanto');
  }, []);
  
  // *** ------------------------------------------------------------------------------------ *** //
  
  const search = async (value: string) => {
    if (value) {
      const pokemon = await pokeApi.searchPokemon(value);
      setPokemons([pokemon]);

      return
    }

    updatePokemons('kanto');
  }

  const updatePokemons = async (region: string) => {
    const {limit, offset} = getGenData(region);
    await getPokemonGeneration(region, limit, offset);
  }
  
  // *** ------------------------------------------------------------------------------------ *** //

  return (
    <PokemonsContext.Provider 
      value={{pokemons, search, updatePokemons}}>
        {children}
    </PokemonsContext.Provider>
  );
};

// *** -------------------------------------------------------------------------------------- *** //

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  return context;
}
