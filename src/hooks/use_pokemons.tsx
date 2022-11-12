import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { EvolutionLine, PokeApi, Pokemon, PokemonData, Variation } from "../providers/api/pokeapi";
import { cachePokemonData, cacheRegion, checkIfPokemonDataIsCached, checkIfRegionIsCached } from "../providers/cache/sessionCache";

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
  const [hisui, setHisui] = useState<Pokemon[]>([]);
  
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
    galar,
    hisui
  }

  const setRegion = {
    kanto: setKanto,
    johto: setJohto,
    hoenn: setHoenn,
    sinnoh: setSinnoh,
    unova: setUnova,
    kalos: setKalos,
    alola: setAlola,
    galar: setGalar,
    hisui: setHisui
  }

  const getPokemons = async (region: string): Promise<void> => {
    const memoryCache = regionCache[region as keyof typeof regionCache];

    if (memoryCache.length > 0) return setPokemons(memoryCache);

    const cachedList = checkIfRegionIsCached(region);
    
    if (cachedList) return setPokemons(cachedList);

    const pokemons = await pokeApi.listByRegion(region);
    setPokemons(pokemons);

    cacheRegion(region, pokemons);

    setRegion[region as keyof typeof setRegion](pokemons);

    return;
  }

  const setPokemonData = (pokemonData: PokemonData) => {
    const {pokemon, evolutionLine, variations} = pokemonData;
      
    setPokemon(pokemon);
    setVariations(variations);
    setEvolutionLine(evolutionLine);
  }


  const getOnePokemon = async (id: string): Promise<void> => {
    const cachedData = checkIfPokemonDataIsCached(id);

    if (cachedData) return setPokemonData(cachedData);

    const pokemonData = await pokeApi.getOnePokemon(id);

    setPokemonData(pokemonData);

    cachePokemonData(id, pokemonData);

    return
  }

  useEffect(() => {
    getPokemons('kanto');
  }, []);
  
  // *** ------------------------------------------------------------------------------------ *** //
  
  const search = async (value: string) => {
    if (value) {
      const pokemon = await pokeApi.searchPokemon(value);
      
      if (pokemon.length === 0) {
        return
      }

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
