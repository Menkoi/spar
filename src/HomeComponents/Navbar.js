import React from "react";
import Logo from '../img/logo_nav.webp';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">
          <img src={Logo} className="NavPhoto" alt=""></img>
        </span>
        <div>
        <button type="button" className="btn btn-light btn-sm navButton">
          <Link to="/" className="nav-link text-dark"> HOME</Link>
        </button>
        <button type="button" className="btn btn-light btn-sm navButton">
          <Link to="/about" className="nav-link text-dark"> ABOUT</Link>
          </button>
          <button type="button" className="btn btn-light btn-sm navButton">
          <Link to="/gallery" className="nav-link text-dark">GALLERY</Link>
          </button>
          <button type="button" className="btn btn-light btn-sm navButton">
          <Link to="/banned" className="nav-link text-dark"> BANNED</Link>
          </button>
          <button type="button" className="btn btn-light btn-sm navButton">
          <Link to="/contact" className="nav-link text-dark">CONTACT</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
