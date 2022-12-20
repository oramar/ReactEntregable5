import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouter = () => {
    const nameTrainer = useSelector(state => state.nameTrainer)
    const rutaActual = useSelector(state=>state.rutaActual)
    if (nameTrainer) {  
           
        return <Outlet />
    } else {
        return <Navigate to='/' nameTrainer="" />
    }

}

export default ProtectedRouter