import React, {useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'
const useSessionHookCart = () => {
    const [useSession, setUseSession] = useState(null)

    useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("react-use-cart"))
    if(cart){
    setUseSession(cart)
    }
    }, [])

  return useSession
}

export default useSessionHookCart