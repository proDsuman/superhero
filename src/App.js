import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SuperHero from './components/Superhero';

function App(){
  return(
    <Router>
    <div className="home">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/SuperHero/:hero" element={<SuperHero />} />

      </Routes>


    </div>
  </Router>
  )
}




export default App;
