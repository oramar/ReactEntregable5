import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useInfoPokedex from '../hooks/useInfoPokedex'

const InfoPokedex = () => {
    const { id } = useParams()
    const { pokemon } = useInfoPokedex(id)

    return (
        <div>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
    )
}

export default InfoPokedex 