import React from 'react';
import './/theming/theme.scss'
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Met from './components/Met';
import Home from './pages/home';
import CustomNav from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <CustomNav />
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/step-2" element={<Met  />} />
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
