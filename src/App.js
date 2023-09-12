import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TravelMap from './components/TravelMap';
import LocationPage from './components/LocationPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TravelMap />} />
        <Route path="/location/:id" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
