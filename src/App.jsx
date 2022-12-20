import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouter from './components/ProtectedRouter'
import HomePokedex from './pages/HomePokedex'
import NamePokedex from './pages/NamePokedex'
import InfoPokedex from './pages/InfoPokedex'
import PokedexHeader from './components/pokedex/PokedexHeader'
import { useEffect, useState } from 'react'
import { setRutaActualGlobal } from './store/slices/rutaActual.slice'

function App() {
  const nameTrainer = useSelector(state => state.nameTrainer)
  const rutaActual = useSelector(state=>state.rutaActual)
  const dispatchRuta = useDispatch();
  const getRuta = () => {
    window.onpopstate = (e) => {
      dispatchRuta(setRutaActualGlobal(window.location.href));
    };
  };
  useEffect(() => {
    getRuta();
  }, []);
  console.log(rutaActual)
 console.log(rutaActual.endsWith('/#/'))
  return (
    <div className="App">
     
        {
         
         rutaActual.endsWith('/#/') ?"": <PokedexHeader /> 
        }
      
    
      <Routes>
        <Route path='/' element={<HomePokedex />} />

        {/**Ruta Protegida o anidada */}

        <Route element={<ProtectedRouter/>}>

          <Route path='/pokedex' element={<NamePokedex />} />
          <Route path='/pokedex/:id' element={<InfoPokedex />} />
        </Route>
      </Routes>
        {
          
          rutaActual.endsWith('/#/') ? <PokedexHeader />:""
          
        }
     

    </div>
  )
}

export default App
