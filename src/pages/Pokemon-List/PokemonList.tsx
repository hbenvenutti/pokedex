import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import { usePokemons } from "../../hooks/use_pokemons";
import { Button, Container, FormContainer, List } from './styles';
import { Pokemon } from '../../components/Pokemon/Pokemon';
import { nameStartsWithValue } from '../../utils/nameStartsWithSearchValue';
import { pokemonNameList } from '../../utils/pokemonNameList';

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

  const handleSubmit = (event: FormEvent) => {
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

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const setRegion = {
    'kanto': setKanto,
    'johto': setJohto,
    'hoenn': setHoenn,
    'sinnoh': setSinnoh,
    'unova': setUnova,
    'kalos': setKalos,
    'alola': setAlola,
    'galar': setGalar,
    'hisui': setHisui 
  }

  const handleRegion = async (region: string) => {
    deactivateButtons();
    setRegion[region as keyof typeof setRegion](true);
    setLoading(true);
    await getPokemons(region);
    setLoading(false);
  }

  useEffect(() => {
    if (pokemons.length === 0 && !loading) {
      setLoading(true)
      return
    }
    setLoading(false);
  }, [pokemons]);

  useEffect(() => { handleRegion('kanto')}, [])
  
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <input list='pokemon-list' type='search' onChange={handleSearch}/>
        <button type='submit'>
          <FaSearch className='searchIcon'/>
        </button>

        <datalist id='pokemon-list'>
          {
            searchValue && pokemonNameList.map(pokemon => 
                nameStartsWithValue(searchValue, pokemon) 
                && <option key={pokemon} value={pokemon}/>)
          }
        </datalist>
      </FormContainer>

      <div className='regions'>
        <Button onClick={() => handleRegion('kanto')} isActive={kanto}>Kanto</Button>
        <Button onClick={() => handleRegion('johto')} isActive={johto}>Johto</Button>
        <Button onClick={() => handleRegion('hoenn')} isActive={hoenn}>Hoenn</Button>
        <Button onClick={() => handleRegion('sinnoh')} isActive={sinnoh}>Sinnoh</Button>
        <Button onClick={() => handleRegion('unova')} isActive={unova}>Unova</Button>
        <Button onClick={() => handleRegion('kalos')} isActive={kalos}>Kalos</Button>
        <Button onClick={() => handleRegion('alola')} isActive={alola}>Alola</Button>
        <Button onClick={() => handleRegion('galar')} isActive={galar}>Galar</Button>
        <Button onClick={() => handleRegion('hisui')} isActive={hisui} disabled={true}>Hisui</Button>
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
                const {id, dexNumber, name, types, art, formId} = pokemon;
                return (
                  <Pokemon 
                  key={id}
                  dexNumber={dexNumber}
                  name={name} 
                  art={art}
                  types={types}
                  formId={formId}
                  />
                )
              })}
            </List>
      } 
    </Container>
  )
}
