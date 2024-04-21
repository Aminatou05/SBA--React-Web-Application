import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
    } catch (error) {
      setPokemonData(null);
      setError('Pokemon not found');
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1> Enter a Pokémon name to Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Pokémon Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {pokemonData && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>{pokemonData.name}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonList;


