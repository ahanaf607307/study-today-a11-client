import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import Loading from './Loading'



function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()
if(loading) {
  return <Loading/>
  
}
if(user) {
  return children
}
return <Navigate state={location.pathname} to={'/login'}/>
}

export default PrivateRoute
