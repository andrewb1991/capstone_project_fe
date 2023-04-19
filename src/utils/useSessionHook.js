import React, {useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'
const useSessionHook = () => {
    const [useSession, setUseSession] = useState(null)

    useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("authCode"))
    if(user){
    setUseSession(user)
    }
    }, [])

  return useSession
}

export default useSessionHook