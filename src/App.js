import React from 'react';
import './App.css';
import NavBar from './components/nav_bar';
import Contact from './components/contact'; 
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
