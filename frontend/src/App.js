// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Class for overall layout */}
        <Header />

        <main className="main-content"> {/* Class for main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes for detailed project pages if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;