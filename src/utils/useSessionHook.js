import React, {useEffect, useState} from 'react'
import jwt_decode from 'jwt-decode'

const useSessionHook = () => {
    const session = localStorage.getItem("authCode")
    const [useSession, setUseSession] = useState(null)

    useEffect(()=>{
    const user = localStorage.getItem("authCode")
    if(user){
    const dedodedUser = jwt_decode(user)
    setUseSession(dedodedUser)
    }
    }, [])
    
  return useSession
}

export default useSessionHook