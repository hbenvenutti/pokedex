import axios from 'axios';

import { getIdFromURL } from '../../utils/get_id_from_url';

export const artworkUrl = 
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'


export interface Variety {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  }
}

interface VarietyResponse {
  name: string;
  varieties: Variety[];
}

export interface PokemonResponse {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  }
}

export interface PokeType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

interface TypesResponse {
  id: number;
  stats: Stat[];
  types: PokeType[];
  species: {
    name: string;
  }
}

class PokeApi {
  private static INSTANCE: PokeApi;

  public static getInstance(): PokeApi {
    if (!PokeApi.INSTANCE) {
      PokeApi.INSTANCE = new PokeApi();
    }

    return PokeApi.INSTANCE;
  }

  private api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
  });

  listPokemon = async (limit: number, offset: number): Promise<PokemonResponse[]> => {
    const {data} = await this.api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    
    const pokemonList = data.results as PokemonResponse[];
    
    return pokemonList;
  }

  getTypes = async (id: number) => {
    const { data } = await this.api.get(`/pokemon/${id}`);
    
    const results = data as TypesResponse;
    
    const types = results.types.map(type => {
      return type.type.name
    })

    return {types, stats: results.stats, name: results.species.name};
  }

  private getVarieties = async (id: number) => {
    const { data } = await this.api.get(`/pokemon-species/${id}`) ;
    
    const varieties = data.varieties.map((variety: Variety) => {
      const name = variety.pokemon.name.split('-').join(' ');
      const id = getIdFromURL(variety.pokemon.url);
  
      return {
        name,
        id,
        url: variety.pokemon.url
      }
    });

    return {varieties, name: data.name};
  }

  getPokemonInfo = async (id: number) => {
    // const {varieties, name} = await this.getVarieties(id);
    const {types, stats, name} = await this.getTypes(id);

    return {
      id,
      name,
      // varieties,
      types,
      stats
    }
  }

  searchPokemon = async(value: string) => {
    const { data } = await this.api.get(`/pokemon/${value}`);

    const results = data as TypesResponse;

    const types = results.types.map(type => {
      return type.type.name
    })

    const {id, species} = results;

    return {id, types, stats: results.stats, name: species.name};
  }
}

export { PokeApi };
