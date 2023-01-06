import React from 'react'
import { useNavigate } from 'react-router-dom'
import useUrlPokemon from '../../hooks/useUrlPokemon'
import '../style/pokedexCard.css'

const PokedexCard = ({ url }) => {
  const { urlPokemon } = useUrlPokemon(url)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/pokedex/${urlPokemon.id}`)
  }
  return (
    <article className={`poke-card border-${urlPokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`poke-card__header bg-${urlPokemon?.types[0].type.name}`}>
        <img className='poke-card__sprite' src={urlPokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      
      <section className='poke-card__body'>
        <h3 className={`poke-card__name color-${urlPokemon?.types[0].type.name}`} >{urlPokemon?.name}</h3>
        <ul className='poke-card__types-container'>
          {
            urlPokemon?.types.map(type => (
              <li className='poke-card__type' key={type.type.name}>{type.type.name}</li>
            ))
          }
        </ul>
      </section>
      <footer className=' poke-card__footer'>
        <ul className='poke-card__stats-container'>
          {
            urlPokemon?.stats.map(stat => (
              <li className='poke-card__stat' key={stat.stat.name}>
                <span className='poke-card__label'>{stat.stat.name}</span>
                <span className={`poke-card__number color-${urlPokemon?.types[0].type.name}`}>{stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokedexCard