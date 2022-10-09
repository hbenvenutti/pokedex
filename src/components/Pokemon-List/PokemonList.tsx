import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { usePokemons } from "../../hooks/use_pokemons";
import { Pokemon } from '../Pokemon/Pokemon';
import { Button, Container, FormContainer, List } from './styles';

export const PokemonList = () => {
  const { pokemons, search, updatePokemons } = usePokemons()
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

  // const [pokemons, setPokemons] = useState<any>([])
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    search(searchValue);
    deactivateButtons();
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
    await updatePokemons('kanto');
  }

  const handleJohto = () => {
    deactivateButtons()
    setJohto(true);
    updatePokemons('johto');
  }

  const handleHoenn = () => {
    deactivateButtons()
    setHoenn(true);
    updatePokemons('hoenn');
  }

  const handleSinnoh = async () => {
    deactivateButtons()
    setSinnoh(true);
    await updatePokemons('sinnoh');
  }

  const handleUnova = async () => {
    deactivateButtons()
    setSinnoh(true);
    setLoading(true);
    await updatePokemons('unova');
    setLoading(false);
  }

  // useEffect(() => {
  //   // const { pokemons } = usePokemons();
  //   // setPokemons(pokemons)
  //   setLoading(false);
  // }, [])
  
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
        <Button isActive={kalos}>Kalos</Button>
        <Button isActive={alola}>Alola</Button>
        <Button isActive={galar}>Galar</Button>
        <Button isActive={hisui}disabled={true}>Hisui</Button>
      </div>

      <List>
        {
          loading 
          ? <h1>Carregando</h1> 
          : pokemons.map(pokemon => {
            const {id, name, types, stats} = pokemon;
            return (
              <Pokemon 
              key={id} 
              id={id} 
              name={name} 
              stats={stats} 
              types={types}
              />
              )
            })
          } 
      </List>
    </Container>
  )
}
