import axios from 'axios';

export interface Pokemon {
  id: string;
  formId: string;
  abilities: string[];
  name: string;
  entry: string;
  dexNumber: number;
  types: string[];
  art: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

class PokeApi {
  private static INSTANCE: PokeApi;

  public static getInstance(): PokeApi {
    if (!PokeApi.INSTANCE) {
      PokeApi.INSTANCE = new PokeApi();
      console.log('api: ', import.meta.env.VITE_REACT_APP_API_URL as string)
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

  getOnePokemon = async(id: string): Promise<Pokemon | undefined> => {
    const {data} = await this.api.get(`/pokemons/${id}`);

    return data as Pokemon
  }
}

export { PokeApi };
