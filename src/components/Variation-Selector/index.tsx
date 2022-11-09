import { ChangeEvent } from "react";
import { usePokemons } from "../../hooks/use_pokemons"
import { Stats } from "../../pages/Pokemon-Page/PokemonPage";
import { Pokemon, Variation } from "../../providers/api/pokeapi"
import { SelectorContainer } from "./styles"

interface VariationSelectorProps {
  setName: (name: string) => void;
  setArt: (art: string) => void;
  setEntry: (art: string) => void;
  setTypes: (types: string[]) => void;
  setAbilities: (abilities: string[]) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setStats: (stats: Stats) => void;
}

export const VariationSelector = (
  {setName, setArt, setEntry, setTypes, setHeight, setStats, setWeight, setAbilities}: 
    VariationSelectorProps) => {
  
    const {pokemon, variations} = usePokemons()


  const setProperties = (variation: Pokemon | Variation) => {
    const {abilities, hp, attack, defense, specialAttack, specialDefense, speed} = variation;

    setName(variation.name);
    setArt(variation.art);
    setEntry(variation.entry);
    setTypes(variation.types);
    setHeight(variation.height);
    setWeight(variation.weight);
    setStats({hp, attack, defense, specialAttack, specialDefense, speed});
    setAbilities(abilities);
  }

  const handleSelection = (event: ChangeEvent<HTMLSelectElement>) => {
    const {value} = event.target;
    
    const variation = variations.find(variation => variation.name === value);
    
    variation ? setProperties(variation) : setProperties(pokemon);
  }

  return (
    <SelectorContainer onChange={handleSelection}>
      <option 
        value={pokemon.name}
      >
        {pokemon.name.toUpperCase()}
      </option>
      {
        variations.map(variation => 
          <option 
            value={variation.name}
            key={variation.name}
          >
            {variation.name.toUpperCase()}
          </option>)
      }
    </SelectorContainer>
  )
}
