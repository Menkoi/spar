import React from "react";
//import { MDBAnimation } from "mdbreact";
import Logo from '../img/logo_nav.png';
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
          <Link to="/Login" class="nav-link text-dark"> LOGIN</Link>
          </button>
          <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/spar" class="nav-link text-dark"> BTN 3</Link>
          </button>
          <button type="button" class="btn btn-light btn-sm" href="/LoginPage">
          <Link to="/spar" class="nav-link text-dark"> BTN 4</Link>
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
