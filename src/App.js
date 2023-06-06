import React from "react";
import "./theming/theme.scss";
import "./App.css";

import { Outlet } from "react-router-dom";
import Met from "./components/Met";
import Home from "./pages/home";
import CustomNav from "./components/Navbar";
import Hero from "./components/Hero";
import ShowCase from "./components/ShowCase";
import Azhar from "./pages/Azhar";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div className="App">
      <CustomNav />
       <Outlet />
      
    </div>
  );
}

export default App;
