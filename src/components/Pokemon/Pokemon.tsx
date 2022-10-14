import React from "react";

import { capitalize, capitalizeName } from '../../utils/capitalize';
import { Container } from "./styles";


interface PokemonProps {
  id?: string;
  dexNumber: number;
  name: string;
  types: string[];
  art: string;
}

export const Pokemon = (props: PokemonProps) => {
  return (
    <Container>
      <a className="link">
        <img src={props.art} alt={props.name} />
      </a>
      <span>N° {
          props.dexNumber < 10 
            ? `00${props.dexNumber}` 
            : props.dexNumber < 100 ? `0${props.dexNumber}` : props.dexNumber
        }
      </span>
      <strong>{capitalizeName(props.name)}</strong>

      <div className="types">
        <span className={props.types[0]}>{`${capitalize(props.types[0])}`}</span>
        {props.types[1] && <span className={props.types[1]}>{`${capitalize(props.types[1])}`}</span>}
      </div>
    </Container>
  )
}
