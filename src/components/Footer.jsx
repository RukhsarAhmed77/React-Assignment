import React from 'react'
import "./styles.css"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold">Nexora</h2>
          <p className="text-gray-400 mt-2">Providing quality services to boost your online presence.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="text-gray-400 mt-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-400 mt-2">Email: contact@Nexora.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Nexora. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer