import React, { Component } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/searchbar';
function Autismo() {
  return (
    <body id="page2">
      <Navbar />
      <Description/>
      <SearchBar/>
      <Footer />
    </body>
  );
} 
export default Autismo;