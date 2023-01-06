import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import PokedexHeader from './shared/PokedexHeader'

const ProtectedRouter = () => {
    const nameTrainer = useSelector(state => state.nameTrainer)  
    if (nameTrainer) {

        return (
            <>
                <PokedexHeader isLogo={true}/>
                <Outlet />
            </>
        )
    } else {
        return <Navigate to='/' nameTrainer="" />
    }

}

export default ProtectedRouter