import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  //using useEffect
  useEffect(() => {
    const fetchPokemonData = async () => {
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

    // Fetch initial data for a default Pokemon (e.g., Pikachu)
    fetchPokemonData();
  }, []); // Empty dependency array means this effect runs only once, on mount

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
    <div className="container">
      <h1>Welcome, Pokémon Trainer!</h1>
      <h2> Enter a Pokémon name to Search</h2>
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
      {/* // added a conditional check to ensure that pokemonData and pokemonData.sprites exist before trying to access the front_default property. */}
      {pokemonData && pokemonData.sprites && pokemonData.sprites.front_default && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>{pokemonData.name}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonList;



