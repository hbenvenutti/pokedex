import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { EvolutionLine, PokeApi, Pokemon, Variation } from "../providers/api/pokeapi";

interface PokemonsContextData {
  pokemons: Pokemon[];
  pokemon: Pokemon;
  evolutionLine: EvolutionLine;
  variations: Variation[]
  getPokemons: (region: string) => Promise<void>;
  search: (value: string) => Promise<void>;
  getOnePokemon: (id: string) => Promise<void>;
}

interface PokemonsProps {
  children: ReactNode;
}

const PokemonsContext = createContext<PokemonsContextData>({} as PokemonsContextData);

export const PokemonsProvider = ({children}: PokemonsProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [evolutionLine, setEvolutionLine] = useState<EvolutionLine>({} as EvolutionLine)

  const [kanto, setKanto] = useState<Pokemon[]>([]);
  const [johto, setJohto] = useState<Pokemon[]>([]);
  const [hoenn, setHoenn] = useState<Pokemon[]>([]);
  const [sinnoh, setSinnoh] = useState<Pokemon[]>([]);
  const [unova, setUnova] = useState<Pokemon[]>([]);
  const [kalos, setKalos] = useState<Pokemon[]>([]);
  const [alola, setAlola] = useState<Pokemon[]>([]);
  const [galar, setGalar] = useState<Pokemon[]>([]);
  
  const pokeApi = PokeApi.getInstance();

  // *** ------------------------------------------------------------------------------------ *** //

  const regionCache = {
    kanto,
    johto,
    hoenn,
    sinnoh,
    unova,
    kalos,
    alola,
    galar
  }

  const setRegion = {
    kanto: setKanto,
    johto: setJohto,
    hoenn: setHoenn,
    sinnoh: setSinnoh,
    unova: setUnova,
    kalos: setKalos,
    alola: setAlola,
    galar: setGalar
  }

  const getPokemons = async (region: string): Promise<void> => {
    const cache = regionCache[region as keyof typeof regionCache];
    
    if (cache.length === 0) {
      const pokemons = await pokeApi.listByRegion(region);
      setPokemons(pokemons);

      setRegion[region as keyof typeof setRegion](pokemons);

      return;
    }

    setPokemons(cache);
  }

  const getOnePokemon = async (id: string) => {
    const pokemonData = await pokeApi.getOnePokemon(id);

    const {pokemon, evolutionLine, variations} = pokemonData;

    setPokemon(pokemon);
    setVariations(variations);
    setEvolutionLine(evolutionLine);
    return
  }

  useEffect(() => {
    getPokemons('kanto');
  }, []);
  
  // *** ------------------------------------------------------------------------------------ *** //
  
  const search = async (value: string) => {
    if (value) {
      const pokemon = await pokeApi.searchPokemon(value);
      
      setPokemons(pokemon);

      return
    }

    getPokemons('kanto');
  }

  // *** ------------------------------------------------------------------------------------ *** //

  return (
    <PokemonsContext.Provider 
      value={{pokemon, variations, evolutionLine, pokemons, search, getPokemons, getOnePokemon}}>
        {children}
    </PokemonsContext.Provider>
  );
};

// *** -------------------------------------------------------------------------------------- *** //

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  return context;
}
