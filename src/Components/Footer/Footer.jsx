import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=" bg-white border-t">
  <footer className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-12 text-gray-700 font-medium">

    {/* Contact & About */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Company</h3>
      <ul className="space-y-2">
        <li><Link to="/contactUs" className="hover:text-orange-500 transition">Contact Us</Link></li>
        <li><Link to="/aboutUs" className="hover:text-orange-500 transition">About Us</Link></li>
      </ul>
    </div>

    {/* Assignment Features */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Features</h3>
      <ul className="space-y-2">
        <li><Link to="/createAssignments" className="hover:text-orange-500 transition">Create Assignment</Link></li>
        <li><Link to="/myAttempted" className="hover:text-orange-500 transition">My Attempted</Link></li>
      </ul>
    </div>

    {/* Assignment Navigation */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Assignments</h3>
      <ul className="space-y-2">
        <li><Link to="/assignment" className="hover:text-orange-500 transition">All Assignments</Link></li>
        <li><Link to="/pendingAssignments" className="hover:text-orange-500 transition">Pending Assignments</Link></li>
      </ul>
    </div>

  </footer>

  {/* Bottom Section */}
  <div className="border-t text-center py-6 text-sm text-gray-500">
    © 2025 - All rights reserved by <span className="font-semibold text-gray-800">Ahanaf Mubasshir Rishad</span>
  </div>
</div>

  )
}

export default Footer
