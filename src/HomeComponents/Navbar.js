import React from "react";
import Logo from '../img/logo_nav.webp';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <nav class="navbar navbar-inverse elegant-color">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-light">
          <img src={Logo} className="NavPhoto" alt=""></img>
        </span>
        <div>
        <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/" class="nav-link text-dark"> HOME</Link>
          </button>
        <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/about" class="nav-link text-dark"> About</Link>
          </button>
          <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/gallery" class="nav-link text-dark">GALLERY</Link>
          </button>
          <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/banned" class="nav-link text-dark"> BANNED</Link>
          </button>
          <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/contact" class="nav-link text-dark">CONTACT</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
