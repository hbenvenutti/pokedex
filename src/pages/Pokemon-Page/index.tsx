import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import {useParams} from 'react-router-dom';

import { EvolutionLine } from "../../components/Evolution-Line";
import { PokemonChart } from "../../components/Pokemon-Chart";
import { VariationSelector } from "../../components/Variation-Selector";

import { usePokemons } from "../../hooks/use_pokemons";
import { Pokemon } from "../../providers/api/pokeapi";
import { capitalize, capitalizeName } from "../../utils/capitalize";
import { LoadingSVG, PokemonPageContainer } from "./style";

export interface Stats {
  hp: number;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;
}

export const PokemonPage = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams()
  const { getOnePokemon, pokemon, variations, evolutionLine } = usePokemons();
  
  const [name, setName] = useState("");
  const [abilities, setAbilities] = useState<string[]>([])
  const [art, setArt] = useState("");
  const [entry, setEntry] = useState("");
  const [types, setTypes] = useState<string[]>([]);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [stats, setStats] = useState<Stats>({} as Stats);

  // *** ---- Functions --------------------------------------------------------------------- *** //

  const setPokemonData = (pokemon: Pokemon) => {
    const { hp, attack, specialAttack, defense, specialDefense, speed } = pokemon;

    setName(pokemon.name);
    setArt(pokemon.art);
    setEntry(pokemon.entry);
    setTypes(pokemon.types)
    setStats({hp, attack, specialAttack, defense, specialDefense, speed})
    setHeight(pokemon.height)
    setWeight(pokemon.weight)
    setAbilities(pokemon.abilities)
  }

  // *** ---- Effects ----------------------------------------------------------------------- *** //

  useEffect(() => {
    setLoading(true);
    
    if (id) {
      getOnePokemon(id);
      window.scrollTo(0, 0)
    }
  }, [id]);

  useEffect(() => {

    if (pokemon) {
      setPokemonData(pokemon);
      setLoading(false);
    }

  }, [pokemon])

  // *** ---- TSX --------------------------------------------------------------------------- *** //

  return (
    <PokemonPageContainer>
      {
        !loading && name
          ? <>
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
                <div className="art-container">
                  <img title={name} src={art} alt="pokemon art" />

                  {variations.length !== 0 &&
                    <VariationSelector 
                      setName={setName}
                      setArt={setArt}
                      setEntry={setEntry}
                      setTypes={setTypes}
                      setHeight={setHeight}
                      setWeight={setWeight}
                      setStats={setStats}
                      setAbilities={setAbilities}
                    />
                  }
                </div>
                
                <div className="rightColumn">
                  <p>{entry}</p>

                  <div className="attributes">
                    <div className="attributes-column">
                      <div className="attribute">
                        <strong>Altura</strong>
                        <span>{height}</span>
                      </div>

                      <div className="attribute">
                        <strong>Peso</strong>
                        <span>{weight}</span>
                      </div>


                      <div className="attribute">
                        <strong>Habilidades</strong>
                        {abilities.map(ability => {
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

              {
                evolutionLine && <EvolutionLine />
              }
            </>
          
          : <LoadingSVG 
              className='loading' 
              type='spinningBubbles' 
              color='#4592c4' 
              width={100} 
              height={100}
              delay={0}  
            />
      }
    </PokemonPageContainer>
  )
}
