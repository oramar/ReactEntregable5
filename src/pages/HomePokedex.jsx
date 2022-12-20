import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokedexHeader from '../components/pokedex/PokedexHeader'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import { setRutaActualGlobal } from '../store/slices/rutaActual.slice'


const HomePokedex = () => {
  const dispatch = useDispatch()
  const dispatchRuta = useDispatch()
  const navigate = useNavigate()
  const nameTrainer = useSelector(state => state.nameTrainer)
  const rutaActual = useSelector(state=>state.rutaActual)
  console.log('home'+rutaActual)
  const handeSubmit = (e) => {
    e.preventDefault()
    dispatch(setNameTrainerGlobal(e.target.name.value.trim()))    
    e.target.name.value = ''
    navigate('/pokedex')
    nameTrainer ==="" && rutaActual.endsWith('/#/')?"": dispatchRuta(setRutaActualGlobal(window.location.href))

  }
  return (
    <div>
      <img src="/Home/pokedex.png" alt="" />
      <h1>Hey Trainer!</h1>
      <p>Give me your name to start</p>
      <form onSubmit={handeSubmit}>
        <input id='name' type="text" />
        <button >Start</button>
      </form>

    </div>
  )
}

export default HomePokedex