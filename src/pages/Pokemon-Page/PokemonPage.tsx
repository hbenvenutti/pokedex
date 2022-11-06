import React, { useEffect } from "react";
import {useParams} from 'react-router-dom';
import { PokemonChart } from "../../components/Pokemon-Chart/PokemonChart";

import { usePokemons } from "../../hooks/use_pokemons";
import { capitalize, capitalizeName } from "../../utils/capitalize";
import { NotFound } from "../Not-Found/NotFound";
import { Page } from "./style";

export const PokemonPage = () => {
  const { id } = useParams()
  const { getOnePokemon, pokemon } = usePokemons();

  useEffect(() => {
    if (id) {
      getOnePokemon(id);
    }
  }, [])

  return (
    <>
      {
        pokemon.name
          ? <Page>
              <div className="name">

              <h1>{capitalizeName(pokemon.name)}</h1>
                <span> N° {
                  pokemon.dexNumber < 10 
                  ? '00'
                  : pokemon.dexNumber < 100 && '0'
                }
                  {pokemon.dexNumber}
                </span>
              </div>

              <div className="profile">
                <img src={pokemon.art} alt={pokemon.name} />
                
                <div className="rightColumn">
                  <p>{pokemon.entry}</p>

                  <div className="attributes">

                    <div className="attribute">
                      <strong>Height</strong>
                      <span>{pokemon.height}</span>
                    </div>

                    <div className="attribute">
                      <strong>Weight</strong>
                      <span>{pokemon.weight}</span>
                    </div>

                    <div className="attribute">
                      <strong>Abilities</strong>
                      {pokemon.abilities.map(ability => {
                          return <span key={ability}>{capitalize(ability)}</span>
                        })}
                    </div>
                  </div>

                    <div className="typesContainer">
                      <strong>Types</strong>
                      <div className="types">
                        {pokemon.types.map(type => {
                          return <span key={type} className={type}>{capitalize(type)}</span>
                        })}
                      </div>
                    </div>

                </div>
              </div>
              <PokemonChart 
                hp={pokemon.hp}
                attack={pokemon.attack}
                specialAttack={pokemon.specialAttack}
                defense={pokemon.defense}
                specialDefense={pokemon.specialDefense}
                speed={pokemon.speed}
              />
            </Page>
          
          : <NotFound />
      }
    </>
  )
}
