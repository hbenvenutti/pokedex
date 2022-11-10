import { ChangeEvent, FormEvent, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { usePokemons } from "../../hooks/use_pokemons"

import { nameStartsWithValue } from "../../utils/nameStartsWithSearchValue"
import { pokemonNameList } from "../../utils/pokemonNameList"
import { SearchFormContainer } from "./styled"

interface SearchFormProps {
  setLoading: (loading: boolean) => void;
  deactivateButtons: () => void;
}

export const SearchForm = ({setLoading, deactivateButtons}: SearchFormProps) => {
  const {search} = usePokemons();
  const [searchValue, setSearchValue] = useState('');

  // *** ---- Functions --------------------------------------------------------------------- *** //
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    setLoading(true);
    await search(searchValue);
    deactivateButtons();
    setLoading(false);
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  // *** ---- TSX --------------------------------------------------------------------------- *** //

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <input 
        placeholder='busque por nome ou número'
        list='pokemon-list' 
        type='search' 
        onChange={onInputChange}
      />

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
    </SearchFormContainer>
  )
}
