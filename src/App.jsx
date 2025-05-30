import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutPage from './components/AboutPage';




const App = () => {
  return (
   <BrowserRouter>
      <NavBar />
      <nav>
        <Link to="/contact">Contact</Link> | 
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/contact" element={<Header />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
