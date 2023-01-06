import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouter from './components/ProtectedRouter'
import HomePokedex from './pages/HomePokedex'
import NamePokedex from './pages/NamePokedex'
import InfoPokedex from './pages/InfoPokedex'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePokedex />} />
        {/**Ruta Protegida o anidada */}

        <Route element={<ProtectedRouter />}>
          <Route path='/pokedex' element={<NamePokedex />} />
          <Route path='/pokedex/:id' element={<InfoPokedex />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
