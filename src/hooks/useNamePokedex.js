import axios from "axios";
import React, { useEffect, useState } from "react";

const useNamePokedex = (typeSelect) => {
  const [pokemons, setPokemons] = useState();

  const getAllNamePokedex = () => {
    if (typeSelect !== "All pokemons") {
      // hacer la petición de los pokemons por tipo

      axios
        .get(typeSelect)
        .then((res) => setPokemons(res.data.pokemon.map((e) => e.pokemon)))
        .catch((err) => console.log(err));
    } else {
      //hace la peticion de todos los pokemones
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999999999`;
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    getAllNamePokedex();
  }, [typeSelect]);

  return { pokemons };
};

export default useNamePokedex;
