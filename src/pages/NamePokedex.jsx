import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import PokedexCard from '../components/pokedex/PokedexCard'
import useNamePokedex from '../hooks/useNamePokedex'
import useTypesPokedex from '../hooks/useTypesPokedex'

const NamePokedex = () => {
    const { nameTrainer } = useSelector(state => state)
    const [typeSelect, setTypeSelect] = useState('All pokemons')
    const { pokemons } = useNamePokedex(typeSelect)
    const { types } = useTypesPokedex()
    const navigate = useNavigate()
    //logica paginacion
    const [page, setPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(8)
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
        <header>
              
            <h2>Welcome {nameTrainer}, here you can find your favorite pokemom</h2>
            <form onSubmit={handleSumit}>
                <input id='search' type="text" />
                <button>Search</button>
            </form>
            <select onChange={handleChange} >
                <option value='All pokemons'>All Pokemons</option>
                {
                    types?.map(type => (
                        <option key={type.url} value={type.url}>{type.name}</option>
                    ))
                }
            </select>

            <Pagination page={page} maxPage={maxPage} setPage={setPage} />

            <div className="poke-caontainer">
                {
                    pokemons?.slice(initialPokemon, finalPokemon).map(pokemon => (
                        <PokedexCard key={pokemon.url} url={pokemon.url} />
                    ))
                }
            </div>
        </header>
    )
}

export default NamePokedex