import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/homePokedex.css'
import PokedexHeader from '../components/shared/PokedexHeader'
const HomePokedex = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handeSubmit = (e) => {
    e.preventDefault()
    dispatch(setNameTrainerGlobal(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')

  }
  return (
    
    <div className='home-container'>
      <img className='home__img' src="/Home/pokedex.png" alt="" />
      <h1 className='home__title'>Hey Trainer!</h1>
      <p className='home_text'>Give me your name to start</p>
      <form className='home_form' onSubmit={handeSubmit}>
        <input placeholder='you name...' className='home__input' id='name' type="text" />
        <button className='home__btn' >Start</button>
      </form>
      <PokedexHeader isLogo={false} />
    </div>
    
  )
}

export default HomePokedex