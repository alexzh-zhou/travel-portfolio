import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TravelMap from './components/TravelMap.js';
import LocationPage from './components/LocationPage.js';
import Typewriter from './components/TypeWriter.js';
import './App.css'

function App() {
  return (
    <div className="Title">
        <h1 className="Title-header">
          Welcome to <Typewriter text="My Travel Portfolio" delay={100} infinite/>
        </h1>
      <Router>
        <Routes>
          <Route path="/" element={<TravelMap />} />
          <Route path="/location/:id" element={<LocationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
