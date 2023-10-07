import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// importar componentes

import { Home } from "./components/Home";
import Pokemon from "./components/Pokemon";
import Navbar from "./layouts/Navbar";

// componente App
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Pokemon" element={<Pokemon />} />

          <Route path="*" element={<Navigate replace to="/Home/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
