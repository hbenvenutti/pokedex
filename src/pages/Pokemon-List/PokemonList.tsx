import React, { useEffect, useState } from 'react';
import {css} from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import { usePokemons } from "../../hooks/use_pokemons";
import { Button, Container, FormContainer, List } from './styles';
import { Pokemon } from '../../components/Pokemon/Pokemon';

export const PokemonList = () => {
  const { pokemons, search, getPokemons } = usePokemons()
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false);

  const [kanto, setKanto] = useState(true);
  const [johto, setJohto] = useState(false);
  const [hoenn, setHoenn] = useState(false);
  const [sinnoh, setSinnoh] = useState(false);
  const [unova, setUnova] = useState(false);
  const [kalos, setKalos] = useState(false);
  const [alola, setAlola] = useState(false);
  const [galar, setGalar] = useState(false);
  const [hisui, setHisui] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    setLoading(true);
    search(searchValue);
    deactivateButtons();
    setLoading(false);
    return
  }

  const deactivateButtons = () => {
    setKanto(false);
    setJohto(false);
    setHoenn(false);
    setSinnoh(false);
    setUnova(false);
    setKalos(false);
    setAlola(false);
    setGalar(false);
    setHisui(false);
  }

  const handleSearch = (value: string) => {
    setSearchValue(value);
  }

  const handleKanto = async () => {
    deactivateButtons()
    setKanto(true);
    setLoading(true);
    await getPokemons('kanto');
    setLoading(false);
  }

  const handleJohto = async () => {
    deactivateButtons()
    setJohto(true);
    setLoading(true);
    await getPokemons('johto');
    setLoading(false);
  }

  const handleHoenn = async () => {
    deactivateButtons()
    setHoenn(true);
    setLoading(true);
    await getPokemons('hoenn');
    setLoading(false);
  }

  const handleSinnoh = async () => {
    deactivateButtons()
    setSinnoh(true);
    setLoading(true);
    await getPokemons('sinnoh');
    setLoading(false);
  }

  const handleUnova = async () => {
    deactivateButtons()
    setUnova(true);
    setLoading(true);
    await getPokemons('unova');
    setLoading(false);
  }

  const handleKalos = async () => {
    deactivateButtons()
    setKalos(true);
    setLoading(true);
    await getPokemons('kalos');
    setLoading(false);
  }

  const handleAlola = async () => {
    deactivateButtons()
    setAlola(true);
    setLoading(true);
    await getPokemons('alola');
    setLoading(false);
  }

  const handleGalar = async () => {
    deactivateButtons()
    setGalar(true);
    setLoading(true);
    await getPokemons('galar');
    setLoading(false);
  }

  const handleHisui = async () => {
    deactivateButtons()
    setHisui(true);
    setLoading(true);
    await getPokemons('hisui');
    setLoading(false);
  }

  useEffect(() => {
    if (pokemons.length === 0 && !loading) {
      setLoading(true)
      return
    }
    setLoading(false);
  }, [pokemons]);
  
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <input type='search' onChange={(e) => handleSearch(e.target.value)}/>
        <button type='submit'>
          <FaSearch className='searchIcon'/>
        </button>
      </FormContainer>

      <div className='regions'>
        <Button onClick={handleKanto} isActive={kanto}>Kanto</Button>
        <Button onClick={handleJohto} isActive={johto}>Johto</Button>
        <Button onClick={handleHoenn} isActive={hoenn}>Hoenn</Button>
        <Button onClick={handleSinnoh} isActive={sinnoh}>Sinnoh</Button>
        <Button onClick={handleUnova} isActive={unova}>Unova</Button>
        <Button onClick={handleKalos} isActive={kalos}>Kalos</Button>
        <Button onClick={handleAlola} isActive={alola}>Alola</Button>
        <Button onClick={handleGalar} isActive={galar}>Galar</Button>
        <Button onClick={handleHisui} isActive={hisui} disabled={true}>Hisui</Button>
      </div>

      {
          loading 
          ? <ReactLoading 
              className='loading' 
              type='spinningBubbles' 
              color='#4592c4' 
              width={100} 
              height={100}
              delay={0}  
            />
          
          : <List> 
              { pokemons.map(pokemon => {
                const {id, dexNumber, name, types, art} = pokemon;
                return (
                  <Pokemon 
                  key={id}
                  dexNumber={dexNumber}
                  name={name} 
                  art={art}
                  types={types}
                  />
                )
              })}
            </List>
      } 
    </Container>
  )
}
