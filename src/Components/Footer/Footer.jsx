import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
     <footer className="footer bg-[#fda400] text-black p-10">
  <nav>
  <Link to='/contactUs' className="link link-hover">Contact us</Link>
  <Link to='/aboutUs' className="link link-hover">About us</Link>
  </nav>
  <nav>

  <Link to='/createAssignments' className="link link-hover">Create Assignment</Link>
  <Link to='/myAttempted' className="link link-hover">My Attempted</Link>
  </nav>
  <nav>
  <Link to='/assignment' className="link link-hover">Assignment</Link>
  <Link to='/pendingAssignments' className="link link-hover">Pending Assignments</Link>
    
  </nav>
</footer>
<h1 className='text-center text-black font-bold bg-[#fda400] pb-8'>Copyright © 2025 - All right reserved by Ahanaf Mubasshir Rishad</h1>
    </div>
  )
}

export default Footer
