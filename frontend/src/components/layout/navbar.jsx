import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src="../../../src/assets/DCExt-IV.png" alt="" width="100"/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
