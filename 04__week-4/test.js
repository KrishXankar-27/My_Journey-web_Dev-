const express = require('express');
const axios = require('axios');

const app = express();

// Helper function to get a random Pokémon ID (PokeAPI has 1010 Pokémon)
const getRandomPokemonId = () => Math.floor(Math.random() * 1010) + 1;

// Route to get a random Pokémon
app.get('/randomPokemon', async (req, res) => {
  try {
    // Get a random Pokémon ID
    const pokemonId = getRandomPokemonId();

    // Fetch Pokémon data from PokeAPI
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    
    // Extract useful information from the API response
    const pokemonData = {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      abilities: response.data.abilities.map((ability) => ability.ability.name),
      types: response.data.types.map((type) => type.type.name),
    };

    // Send the Pokémon data as a response
    res.status(200).json(pokemonData);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error fetching Pokémon data', error: err });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
