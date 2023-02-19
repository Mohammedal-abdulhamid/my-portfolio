import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import NavBar from './pages/home/NavBar';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    
  )
}

export default App;
