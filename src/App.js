import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Met from './components/Met';


function App() {
  return (
    <div className="App">
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
