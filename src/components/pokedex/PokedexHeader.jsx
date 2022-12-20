import React, { useEffect, useState } from 'react'
import '../style/pokedexHeader.css'
const PokedexHeader = () => {

  return (
    <div>
        <div className="logo-container">
          <img className='logo__img' src="/Home/pokedex.png" alt="" />
          <div className="logo__rentangle--red"></div>
          <div className="logo__rentangle--negro"></div>
          <div className="logo__ellipse">
            <div className="logo__ellipse--interior"></div>
            <div className="logo__ellipse--exterior"></div>
          </div>
        </div>

    </div>
  )
}

export default PokedexHeader