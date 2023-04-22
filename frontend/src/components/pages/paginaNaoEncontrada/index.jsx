import React, { useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/Footer";
import "./style.css";

function PaginaNaoEncontrada() {

  return (
    <div>
      <Navbar />
        <div className="PaginaNaoEncontrada">
            <h1>404</h1>
            <p>Pagina não encontrada</p>    
        </div>
      <Footer />
    </div>
  );
}

export default PaginaNaoEncontrada;