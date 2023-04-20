import React, {useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'
const useSessionHookEmpl = () => {
    const [useSession, setUseSession] = useState(null)

    useEffect(()=>{
    const employee = JSON.parse(localStorage.getItem("emplCode"))
    if(employee){
    setUseSession(employee)
    }
    }, [])

  return useSession
}

export default useSessionHookEmpl