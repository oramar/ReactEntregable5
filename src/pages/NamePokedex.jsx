import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import PokedexCard from '../components/pokedex/PokedexCard'
import useNamePokedex from '../hooks/useNamePokedex'
import useTypesPokedex from '../hooks/useTypesPokedex'
import './styles/namePokedex.css'

const NamePokedex = () => {
    const { nameTrainer } = useSelector(state => state)
    const [typeSelect, setTypeSelect] = useState('All pokemons')
    const { pokemons } = useNamePokedex(typeSelect)
    const { types } = useTypesPokedex()
    const navigate = useNavigate()
    //logica paginacion
    const [page, setPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(12)
    const initialPokemon = (page - 1) * pokemonPerPage
    const finalPokemon = page * pokemonPerPage
    const maxPage = pokemons && Math.ceil(pokemons.length / pokemonPerPage)


    const handleSumit = e => {
        e.preventDefault()
        const inputSearch = e.target.search.value.trim().toLowerCase()
        navigate(`/pokedex/${inputSearch}`)
    }

    const handleChange = (e) => {
        setTypeSelect(e.target.value)
        setPage(1)
    }
    return (
        <div className='pokedex'>
            <header className='pokedex__header'>
                <h2 className='pokedex__title'><span className='pokedex__title-red'> Welcome {nameTrainer},</span> here you can find your favorite pokemom</h2>
            </header>
            <div className="pokedex__search-container">
                <form className='pokedex__form' onSubmit={handleSumit}>
                    <input className='pokedex__search' id='search' type="text" />
                    <button className='pokedex__btn'>Search</button>
                </form>

                <select className='pokedex__type' onChange={handleChange} >
                    <option value='All pokemons'>All Pokemons</option>
                    {
                        types?.map(type => (
                            <option  key={type.url} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </div>


            <Pagination page={page} maxPage={maxPage} setPage={setPage} />

            <div className="poke-caontainer">
                {
                    pokemons?.slice(initialPokemon, finalPokemon).map(pokemon => (
                        <PokedexCard key={pokemon.url} url={pokemon.url} />
                    ))
                }
            </div>

            <Pagination page={page} maxPage={maxPage} setPage={setPage} />
        </div>
    )
}

export default NamePokedex