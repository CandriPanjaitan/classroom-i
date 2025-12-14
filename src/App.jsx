import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./page/Home";
import Struktur from "./page/Struktur";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/siswa" element={<h1>Halaman Siswa</h1>} />
      <Route path="/memori" element={<h1>Halaman Memori</h1>} />
    </Routes>
  );
}

export default App;