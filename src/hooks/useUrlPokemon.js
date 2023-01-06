import axios from "axios";
import React, { useEffect, useState } from "react";

const useUrlPokemon = (url) => {
  const [urlPokemon, setUrlPokemon] = useState();
  const getUrlPokemon = () => {
    axios
      .get(url)
      .then((res) => setUrlPokemon(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUrlPokemon();
  }, []);

  return {urlPokemon}
};

export default useUrlPokemon;
