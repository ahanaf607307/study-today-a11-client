import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'



function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()
 
if(loading) {
  return (
    <h1 className='text-5xl text-red-500 text-center flex flex-col justify-center items-center'>Loading....</h1>
  )
}
if(user) {
  return children
}
return <Navigate state={location.pathname} to={'/login'}/>
}

export default PrivateRoute
