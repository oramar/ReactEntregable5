import React from 'react'
import { useNavigate } from 'react-router-dom'
import useUrlPokemon from '../../hooks/useUrlPokemon'

const PokedexCard = ({ url }) => {
  const { urlPokemon } = useUrlPokemon(url)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/pokedex/${urlPokemon.id}`)
  }
  return (
    <article onClick={handleClick}>
      <header>
        <img src={urlPokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section>
        <h3>{urlPokemon?.name}</h3>
        <ul>
          {
            urlPokemon?.types.map(type => (
              <li key={type.type.name}>{type.type.name}</li>
            ))
          }
        </ul>
      </section>
      <footer>
        <ul>
          {
            urlPokemon?.stats.map(stat => (
              <li key={stat.stat.name}>
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokedexCard