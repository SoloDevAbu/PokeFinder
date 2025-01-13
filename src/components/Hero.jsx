import React, { useState } from 'react'
import PokemonView from './PokemonView'
import pokemon from '../assets/6.png'
import axios from 'axios'

const Search = () => {
  const [pokemonNumber, setPokemonNumber] = useState('');
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    tags: [],
  })

  const handleInput = (e) => {
    const value = e.target.value;
    setPokemonNumber(value);

  }
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if(!pokemonNumber < 0 || !pokemonNumber >=1500) {
        return alert("Please enter valid number")
      }
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonNumber}`)
      const name = response.data.name;
      const image = response.data.sprites.front_default;
      const types = response.data.types.map(types => types.type.name);
      setPokemon({ name, image, tags: types });
    } catch (error) {
      
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='text-center font-sans font-semibold mb-5'>Enter Pokemon Number from 1 to 1500 <br /> & <br /> get Your Pokemon Character</h1>

      <div className='bg-neutral-300 flex justify-center items-center pl-4 rounded-xl'>
        <input
          type="text"
          placeholder="Enter Pokemon Number"
          className='bg-neutral-300 py-2 pl-2 text-xs sm:text-base md:text-lg outline-none border-none'
          onChange={handleInput}
        />
        <button
          className="bg-white text-black py-2 border border-black px-2 rounded-xl text-xs sm:text-base md:text-lg"
          onClick={handleSearch}
        >
          Search Pokemon
        </button>
      </div>
      <PokemonView name={pokemon.name.toUpperCase()} image={pokemon.image} types={pokemon.tags}/>
    </div>
  )
}

export default Search