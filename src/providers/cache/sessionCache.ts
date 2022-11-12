import { Pokemon, PokemonData } from "../api/pokeapi"

export const cacheRegion = (region: string, pokemonList: Pokemon[]): void => {
  const stringData = JSON.stringify(pokemonList);
  
  sessionStorage.setItem(region, stringData)

  return
}

export const checkIfRegionIsCached = (region: string): Pokemon[] | undefined => {
  const pokemonList = sessionStorage.getItem(region);

  if (!pokemonList) return undefined;

  return JSON.parse(pokemonList);
}


export const checkIfPokemonDataIsCached = (id: string): PokemonData | undefined => {
  const cache = sessionStorage.getItem(id);

  if (!cache) return undefined;
  
  return JSON.parse(cache)
}

export const cachePokemonData = (id: string, pokemonData: PokemonData): void => {
  const stringData = JSON.stringify(pokemonData);
  
  sessionStorage.setItem(id, stringData)

  return
}
