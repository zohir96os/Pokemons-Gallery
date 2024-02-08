import { useState } from "react";
import "./App.css";
import Pokegallery from "./Components/Pokegallery";

function App() {
  const pokemons = [
    {
      name: "Pikachu",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "Charizard",
      type: "Fire/Flying",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    },
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      name: "Squirtle",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      name: "Jigglypuff",
      type: "Normal/Fairy",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    },
    {
      name: "Mewtwo",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Gyarados",
      type: "Water/Flying",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
    {
      name: "Snorlax",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    },
    {
      name: "Eevee",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    },
    {
      name: "Dragonite",
      type: "Dragon/Flying",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    },
    {
      name: "Gengar",
      type: "Ghost/Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    },
    {
      name: "Machamp",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    },
  ];

  return (
    <>
      <Pokegallery pokemonsList={pokemons} />
    </>
  );
}

export default App;
