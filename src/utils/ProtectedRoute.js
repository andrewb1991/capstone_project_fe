import React from 'react'
import { Outlet } from 'react-router'
import EmployeesList from '../views/employees/EmployeesList'

const ProtectedRoute = () => {
    const session = JSON.parse(localStorage.getItem("emplCode"))
    if(session){
    const actualRole = session.role 
    return actualRole === "admin"
    }
    return false
}


    const Protected = () =>{
    const isAuth = ProtectedRoute()
    return isAuth ? <Outlet/> : <h1>ERROR</h1>
    }

export default Protected