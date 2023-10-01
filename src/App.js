import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import More from './pages/More';
import './App.css';
import NavBar from './pages/home/NavBar';
import Footer from './pages/Footer';
import Skills from './pages/home/Skills';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    
  )
}

export default App;
