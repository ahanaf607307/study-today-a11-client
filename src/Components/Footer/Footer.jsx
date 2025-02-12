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
    </div>
  )
}

export default Footer
