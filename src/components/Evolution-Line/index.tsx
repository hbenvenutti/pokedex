import { Link } from "react-router-dom";
import { usePokemons } from "../../hooks/use_pokemons";
import { EvolutionLineContainer } from "./styles";

export const EvolutionLine = () => {
  const {evolutionLine} = usePokemons();

  return (
    <EvolutionLineContainer>
      <div className="babies">
        {
          evolutionLine.babyStage.map(pokemon => 
          <Link to={`/pokemons/${pokemon.pokemonId}`}>
            <img src={pokemon.art} alt="" />
          </Link>)
        }
      </div>
      <div className="first-stage">
        {
          evolutionLine.firstStage.map(pokemon => 
          <Link to={`/pokemons/${pokemon.pokemonId}`}>
            <img src={pokemon.art} alt="" />
          </Link>)
        }
      </div>

      <div className="second-stage">
        {
          evolutionLine.secondStage.map(pokemon => 
          <Link to={`/pokemons/${pokemon.pokemonId}`}>
            <img src={pokemon.art} alt="" />
          </Link>)
        }
      </div>

      <div className="third-stage">
        {
          evolutionLine.thirdStage.map(pokemon => 
          <Link to={`/pokemons/${pokemon.pokemonId}`}>
            <img src={pokemon.art} alt="" />
          </Link>)
        }
      </div>
    </EvolutionLineContainer>
  );
}
