import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
// import Footer from './Components/Footer';

function App() {
  return (
  <div>
    <Nav />
    <Home />
  </div>
  );
}

export default App;
