import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useTypesPokedex = () => {
 const [types, setTypes] = useState()
 
useEffect(() => {
    const URL =`https://pokeapi.co/api/v2/type`
    axios.get(URL)
    .then(res=> setTypes(res.data.results))
    .catch(err=>console.log(err))
}, [])

return {types}

}

export default useTypesPokedex