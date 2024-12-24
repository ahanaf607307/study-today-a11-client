import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer bg-transparent border-t-2 border-t-orange-100 text-orange-600 font-semibold p-10">
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>

  <h1 className='text-xl font-semibold font-cardFont text-orange-300 text-center mb-5'> All Right Reserve @Ahanaf Mubasshir Rishad 2024</h1>
    </div>
  )
}

export default Footer
