import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { PokemonChart } from "../../components/Pokemon-Chart/PokemonChart";

import { usePokemons } from "../../hooks/use_pokemons";
import { capitalize, capitalizeName } from "../../utils/capitalize";
import { NotFound } from "../Not-Found/NotFound";
import { Page } from "./style";

interface Stats {
  hp: number;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;
}

export const PokemonPage = () => {
  const { id } = useParams()
  const { getOnePokemon, pokemon, variations, evolutionLine } = usePokemons();
  
  const [name, setName] = useState("");
  const [art, setArt] = useState("");
  const [entry, setEntry] = useState("");
  const [types, setTypes] = useState<string[]>([]);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [stats, setStats] = useState<Stats>({} as Stats);

  useEffect(() => {
    if (id) {
      getOnePokemon(id);
    }
  }, []);

  useEffect(() => {
    if (pokemon) {
      const {
        name, 
        art, 
        entry, 
        types, 
        hp, 
        attack, 
        specialAttack, 
        defense, 
        specialDefense, 
        speed,
        height,
        weight
      } = pokemon;

      setName(name);
      setArt(art);
      setEntry(entry);
      setTypes(types)
      setStats({hp, attack, specialAttack, defense, specialDefense, speed})
      setHeight(height)
      setWeight(weight)
    }
  }, [pokemon])

  return (
    <>
      {
        name
          ? <Page>
              <div className="name">

              <h1>{capitalizeName(name)}</h1>
                <span> N° {
                  pokemon.dexNumber < 10 
                  ? '00'
                  : pokemon.dexNumber < 100 && '0'
                }
                  {pokemon.dexNumber}
                </span>
              </div>

              <div className="profile">
                <img title={name} src={art} alt="pokemon art" />
                
                <div className="rightColumn">
                  <p>{entry}</p>

                  <div className="attributes">
                    <div className="attributes-column">
                      <div className="attribute">
                        <strong>Height</strong>
                        <span>{height}</span>
                      </div>

                      <div className="attribute">
                        <strong>Weight</strong>
                        <span>{weight}</span>
                      </div>


                      <div className="attribute">
                        <strong>Abilities</strong>
                        {pokemon.abilities.map(ability => {
                          return <span key={ability}>{capitalize(ability)}</span>
                        })}
                      </div>
                    </div>
                    <div className="attributes-column">
                      <div className="attribute">
                        <strong>EV Yield</strong>
                        {
                          pokemon.evYield.map(ev => 
                            <span key={ev.type}>{`${ev.amount} ${ev.type}`}</span>
                          )
                        }
                      </div>
                    </div>
                  </div>

                    <div className="typesContainer">
                      <strong>Types</strong>
                      <div className="types">
                        {types.map(type => {
                          return <span key={type} className={type}>{capitalize(type)}</span>
                        })}
                      </div>
                    </div>

                </div>
              </div>
              <PokemonChart 
                hp={stats.hp}
                attack={stats.attack}
                specialAttack={stats.specialAttack}
                defense={stats.defense}
                specialDefense={stats.specialDefense}
                speed={stats.speed}
              />
            </Page>
          
          : <NotFound />
      }
    </>
  )
}
