import React from "react";
import Pokemon from "./Pokemon";

const Pokegallery = ({ pokemonsList }) => {
  return (
    <div className="container">
      <div className="poke-gallery">
        {pokemonsList.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            type={pokemon.type}
            image={pokemon.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokegallery;
