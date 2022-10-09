import React from "react";

import { Stat, PokeType, Variety } from "../../providers/api/pokeapi";
import { getArtworkURL } from "../../utils/get_artwork_url";
import { capitalize } from '../../utils/capitalize';
import { Container } from "./styles";


interface PokemonProps {
  id: number;
  name: string;
  stats: Stat[];
  types: string[];
  varieties?: Variety[];
}

export const Pokemon = (props: PokemonProps) => {
  const artworkURL = getArtworkURL(props.id);
  return (
    <Container>
      <a className="link">
        <img src={artworkURL} alt={props.name} />
      </a>
      <span>N° {
          props.id < 10 
            ? `00${props.id}` 
            : props.id < 100 ? `0${props.id}` : props.id
        }
      </span>
      <strong>{capitalize(props.name)}</strong>

      <div className="types">
        <span className={props.types[0]}>{`${capitalize(props.types[0])}`}</span>
        {props.types[1] && <span className={props.types[1]}>{`${capitalize(props.types[1])}`}</span>}
      </div>
    </Container>
  )
}
