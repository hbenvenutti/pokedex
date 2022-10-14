import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PokeApi, Pokemon } from "../providers/api/pokeapi";
import { getIdFromURL } from "../utils/get_id_from_url";

interface PokemonsContextData {
  pokemons: Pokemon[];
  getPokemons: (region: string) => Promise<void>;
  search: (value: string) => Promise<void>;
}

interface PokemonsProps {
  children: ReactNode;
}

const PokemonsContext = createContext<PokemonsContextData>({} as PokemonsContextData);

export const PokemonsProvider = ({children}: PokemonsProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
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
      value={{pokemons, search, getPokemons}}>
        {children}
    </PokemonsContext.Provider>
  );
};

// *** -------------------------------------------------------------------------------------- *** //

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  return context;
}
