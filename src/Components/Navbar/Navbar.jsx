import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider'

function Navbar() {
    const {user , logOutUser} = useContext(AuthContext)

  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
     
      <Link className=" w-24 text-xl font-bold text-pink-600">
        <img src="/src/assets/logo.png" alt="logo" />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul id='navbar' className="menu menu-horizontal px-1">
       
        <li><NavLink to='/'>Home </NavLink></li>
        <li>{user?<NavLink to={`assignment`}>Assignments </NavLink>:''}</li>
        <li>{user?<NavLink to='/pendingAssignments'>Pending Assignments </NavLink> : ''}</li>
      </ul>
    </div>
    <div className="navbar-end">
        <div className='flex gap-x-3'>
            {
                user? '' : <div className='flex gap-x-3'>
                    <Link className='border  px-3 py-1 rounded-xl font-semibold' to='/login'>Login</Link>
                    <Link to='/register' className='border  px-3 py-1 rounded-xl font-semibold'>Register</Link>
                </div>
            }
        </div>
    <div className="dropdown dropdown-end">
    <div className="tooltip tooltip-left" data-tip={user?.displayName}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full" >
          <img
            alt="profile picture"
            src={user?.photoURL} />
        </div>
      </div>
</div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to='/createAssignments'>Create Assignments</NavLink></li>
        <li><NavLink to='/myAttempted'>My Attempted  </NavLink></li>
        <li><button onClick={() =>logOutUser()}>Logout</button></li>
      </ul>
    </div>

    {/* hambarger menu bar  */}
    <div className="dropdown relative">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          id='navbar'
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow absolute right-0">
         
         <li><NavLink to='/'>Home </NavLink></li>
        <li>{user?<NavLink to={`assignment`}>Assignments </NavLink>:''}</li>
        <li>{user?<NavLink to='/pendingAssignments'>Pending Assignments </NavLink> : ''}</li>
        </ul>
      </div>
  </div>

    
    </div>

  )
}

export default Navbar
