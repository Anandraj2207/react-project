import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950 shadow-md">
        <div className="flex items-center justify-between px-6 py-4 md:px-16">
        <div>
       <img
              src="/images/a1.jpeg"
            alt="Logo"
            className="rounded-xl shadow-md w-10 h-10 object-cover"
        />
        </div>

        <div className="hidden md:flex space-x-8">
              <a href="/Home" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Home</a>
           <a href="/About" className="text-white hover:text-blue-400 text-sm font-medium uppercase">About</a>
        <a href="/Services" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Services</a>
            <a href="/Blogs" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Blogs</a>
        </div>

        <div className="hidden md:block">
        <Link to="/contact">
           <span className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded hover:bg-white group">
                 <span className="w-38 h-38 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Contact Us</span>
          </span>
          </Link>
        </div>
        <div className="md:hidden">
    <button onClick={() => setMenu(!menu)}>
            {menu ? <X className="text-white" /> : <Menu className="text-white" />}
       </button>
        </div>
      </div>
      {menu && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-blue-950">

      <a href="/Home" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Home</a>
        <a href="/About" className="text-white hover:text-blue-400 text-sm font-medium uppercase">About</a>
          <a href="/Services" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Services</a>
       <a href="/Blogs" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Blogs</a>
          <Link to="/contact" className="text-white hover:text-blue-400 text-sm font-medium uppercase">Contact Us</Link>

        </div>
      )}
    </nav>
  )
}

export default NavBar;
