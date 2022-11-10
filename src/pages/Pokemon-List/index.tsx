import React, {useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { usePokemons } from "../../hooks/use_pokemons";
import { Button, List, PokemonListPageContainer } from './styles';
import { Pokemon } from '../../components/Pokemon/Pokemon';
import { SearchForm } from '../../components/Search-Form';

export const PokemonList = () => {
  const { pokemons, getPokemons } = usePokemons()
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

  // *** ---- Functions --------------------------------------------------------------------- *** //

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

  // *** ---- Effects ----------------------------------------------------------------------- *** //


  useEffect(() => {
    if (pokemons.length === 0 && !loading) {
      setLoading(true)
      return
    }
    setLoading(false);
  }, [pokemons]);

  useEffect(() => { handleRegion('kanto')}, [])
  
  // *** ---- TSX --------------------------------------------------------------------------- *** //

  return (
    <PokemonListPageContainer>
      <SearchForm deactivateButtons={deactivateButtons} setLoading={setLoading}/>

      <div className='regions'>
        <Button onClick={() => handleRegion('kanto')} isActive={kanto}>Kanto</Button>
        <Button onClick={() => handleRegion('johto')} isActive={johto}>Johto</Button>
        <Button onClick={() => handleRegion('hoenn')} isActive={hoenn}>Hoenn</Button>
        <Button onClick={() => handleRegion('sinnoh')} isActive={sinnoh}>Sinnoh</Button>
        <Button onClick={() => handleRegion('unova')} isActive={unova}>Unova</Button>
        <Button onClick={() => handleRegion('kalos')} isActive={kalos}>Kalos</Button>
        <Button onClick={() => handleRegion('alola')} isActive={alola}>Alola</Button>
        <Button onClick={() => handleRegion('galar')} isActive={galar}>Galar</Button>
        <Button onClick={() => handleRegion('hisui')} isActive={hisui}>Hisui</Button>
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
    </PokemonListPageContainer>
  )
}
