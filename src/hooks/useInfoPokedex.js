import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useInfoPokedex = (id) => {
  const [pokemon, setPokemon] = useState()
const getPokedexInfo =()=>{
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))

}
  useEffect(() => {
    getPokedexInfo()
  }, [id])

 return  {pokemon}
}

export default useInfoPokedex