import React from 'react'; // Diperlukan untuk menggunakan JSX
import Header from "../components/Header"; // 👈 IMPORT HEADER
import "../css/struktur.css"; 
import { Link } from "react-router-dom"; 

function Struktur() {
  return (
    <>
      <Header />
      <main> 
        <h1>Struktur Organisasi</h1> 
      </main>
    </>
  );
}

export default Struktur;