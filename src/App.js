import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from './MyComponents/About';
import { Home } from './MyComponents/Home';
import { Def } from './MyComponents/Def';
function App() {

  return (
    <BrowserRouter>
      <Header title="MytodoList" searchBar={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Def />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
