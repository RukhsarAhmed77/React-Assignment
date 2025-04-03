import React from 'react'
import "./styles.css"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold tracking-wide">Nexora</div>
      <ul className="hidden md:flex space-x-8 text-lg">
        <li><a href="#home" className="hover:text-gray-400 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400 transition-colors">About</a></li>
        <li><a href="#services" className="hover:text-gray-400 transition-colors">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
      </ul>
      <button className="md:hidden text-xl">☰</button>
    </nav>
  )
}

export default Navbar
