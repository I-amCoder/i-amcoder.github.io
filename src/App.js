import React from "react";
import "./theming/theme.scss";
import "./App.css";

import { Outlet } from "react-router-dom";
import CustomNav from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
