import React, { useContext, useEffect, useState } from "react";
import { FaUserTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logoImage from '../../assets/logo.png';

function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);

  // Theme Change for challenge 
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  // const  handleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  return (
    <div className="navbar h-20 fixed top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 md:px-10 lg:px-16 shadow-sm">
  <div className="navbar-start">
    <Link className="w-24">
      <img className="h-7" src={logoImage} alt="logo" />
    </Link>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal lg:flex gap-x-5 text-gray-800 font-semibold">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/assignment">Assignments</NavLink></li>
      {user && <li><NavLink to="/pendingAssignments">Pending Assignments</NavLink></li>}
      <li><NavLink to="/aboutUs">About us</NavLink></li>
      <li><NavLink to="/contactUs">Contact us</NavLink></li>
    </ul>
  </div>

  <div className="navbar-end gap-x-3 hidden lg:flex items-center">
    {!user && (
      <div className="flex gap-x-3">
        <Link className="border px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-100 transition" to="/login">
          Login
        </Link>
        <Link className="border px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-100 transition" to="/register">
          Register
        </Link>
      </div>
    )}
    {/* <button onClick={handleTheme} className="ml-2">
      {theme === "light" ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64,13a1,1,0..." />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.64,17l..." />
        </svg>
      )}
    </button> */}

    <div className="dropdown dropdown-end">
      <div className="tooltip tooltip-left" data-tip={user?.displayName}>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          {user ? (
            <div className="w-10 rounded-full">
              <img referrerPolicy="no-referrer" alt="profile" src={user?.photoURL} />
            </div>
          ) : (
            <FaUserTimes className="w-6 text-gray-600" />
          )}
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow-lg border">
        {user && <li><NavLink to="/createAssignments">Create Assignments</NavLink></li>}
        {user && <li><NavLink to="/myAttempted">My Attempted</NavLink></li>}
        <li>
          {user ? (
            <button onClick={logOutUser}>Logout</button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link className="border px-3 py-1 rounded-lg text-gray-700" to="/login">Login</Link>
              <Link className="border px-3 py-1 rounded-lg text-gray-700" to="/register">Register</Link>
            </div>
          )}
        </li>
      </ul>
    </div>

    {/* Mobile Menu */}
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-40 p-2 shadow-lg border right-0 absolute z-50">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/assignment">Assignments</NavLink></li>
        {user && <li><NavLink to="/pendingAssignments">Pending Assignments</NavLink></li>}
        <li><NavLink to="/aboutUs">About us</NavLink></li>
        <li><NavLink to="/contactUs">Contact us</NavLink></li>
        <li>
          {user ? (
            <button onClick={logOutUser}>Logout</button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link className="border px-3 py-1 rounded-lg text-gray-700" to="/login">Login</Link>
              <Link className="border px-3 py-1 rounded-lg text-gray-700" to="/register">Register</Link>
            </div>
          )}
        </li>
        {/* <li>
          <button onClick={handleTheme} className="mt-1">{theme === "light" ? "🌙" : "☀️"}</button>
        </li> */}
      </ul>
    </div>
  </div>
</div>

  );
}

export default Navbar;
