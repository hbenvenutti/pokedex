import axios from 'axios';

export type EvYield = {
  amount: number;
  type: string;
};

export interface Pokemon {
  id: string;
  formId: string;
  abilities: string[];
  name: string;
  entry: string;
  dexNumber: number;
  types: string[];
  art: string;
  
  height: string;
  weight: string;
  
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;

  evYield: EvYield[];
}

export interface Variation {
  id: string;
  abilities: string[];
  dexNumber: number;
  name: string;
  types: string[];
  art: string;

  hp: number;
  speed: number;
  specialAttack: number;
  attack: number;
  specialDefense: number;
  defense: number;

  entry: string;

  height: string;
  weight: string;
}

interface Evolution {
  pokemonId: string;
  how: string;
  art: string;
}

export interface EvolutionLine {
  id: string;
  species: string;
  babyStage: Evolution[];
  firstStage: Evolution[];
  secondStage: Evolution[];
  thirdStage: Evolution[];
}

export interface PokemonData {
  pokemon: Pokemon;
  variations: Variation[];
  evolutionLine: EvolutionLine;
}

class PokeApi {
  private static INSTANCE: PokeApi;

  public static getInstance(): PokeApi {
    if (!PokeApi.INSTANCE) {
      PokeApi.INSTANCE = new PokeApi();
      // console.log('api: ', import.meta.env.VITE_REACT_APP_API_URL as string)
    }
    
    return PokeApi.INSTANCE;
  }

  private api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL as string
  });


  listByRegion = async (region: string): Promise<Pokemon[]> => {
    const { data } = await this.api.get(`/pokemons?region=${region}`);
    
    return data as Pokemon[];
  }

  searchPokemon = async(value: string): Promise<Pokemon[]> => {
    const { data } = await this.api.get(`/pokemons/?search=${value}`);

    return data as Pokemon[]; 
  }

  getOnePokemon = async(id: string): Promise<PokemonData> => {
    const {data} = await this.api.get(`/pokemons/${id}`);
    
    return data as PokemonData;
  }
}

export { PokeApi };
