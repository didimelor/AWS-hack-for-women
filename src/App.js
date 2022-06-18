import './App.css';
import React from 'react'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './views/Home/Home'
import LogIn from './views/LogIn/LogIn';
import Viaje from './views/Viaje/Viaje';

function App() {
  return (
    <>
    {}
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />}/> 
        <Route path="/home" element={<Home />} />
        <Route path="/viaje" element={<Viaje />} />  
      </Routes>
    </Router>
  </>
  );
}

export default App;
