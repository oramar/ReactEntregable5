import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useInfoPokedex from '../hooks/useInfoPokedex'
import './styles/infopokedex.css'
import ProgresBarStats from '../components/pokedex/ProgresBarStats'

const InfoPokedex = () => {
    const { id } = useParams()
    const { pokemon } = useInfoPokedex(id)

    return (
        <article className='card-info'>
            <header className={`card-info__header bg-${pokemon?.types[0].type.name}`}>
                <img className='card-info__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>

            <section className="card-info-datas">

                <section className="card-info__data">
                    <h2 className={`card-info__id color-${pokemon?.types[0].type.name}`}>{pokemon?.id}</h2>
                    <h3 className={`card-info__name color-${pokemon?.types[0].type.name}`} >{pokemon?.name}</h3>
                    <div className="card-info__weight__height">

                        <div className="card-info__weight">
                            <h4>Peso</h4>
                            <p>{pokemon?.weight}</p>
                        </div>
                        <div className="card-info__height">
                            <h4>Altura</h4>
                            <p>{pokemon?.height}</p>
                        </div>
                    </div>

                </section>
                <div className="card-info-typeability">

                    <section className='card-info-typeability__tipe'>
                        <h4 className='card-info-typeability__title'>Tipo</h4>
                        <u className='card-info-typeability__container'>
                            {
                                pokemon?.types.map(type => (
                                    <li key={type.type.url} className='card-info-typeability__list'>
                                        {type.type.name}
                                    </li>
                                ))
                            }
                        </u>
                    </section>
                    <section className='card-info-typeability__hability'>
                        <h4 className='card-info-typeability__title'>Habilidades</h4>
                        <ul className='card-info-typeability__container'>
                            {
                                pokemon?.abilities.map(ability => (
                                    <li key={ability.ability.url} className='card-info-typeability__list'>
                                        {ability.ability.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </div>
                 <section className='card-info__stats'>
                    <h3 className='card-info__title'>Stats</h3>
                    <ul className='card-info__stats-container'>
                        {
                            pokemon?.stats.map(stat => (
                                <ProgresBarStats key={stat.stat.name} bgcolor="orange" height={30} stat={stat} max={150} />
                            ))
                        }
                    </ul>
                </section>
            </section>

            <section className='card-info__movements'>
                <h3 className='card-info__title'>Movements</h3>
                <ul className='card-info__list'>
                    {
                        pokemon?.moves.map((move) => (
                            <li className='card-info__item' key={move.move.url} >{move.move.name}</li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default InfoPokedex 