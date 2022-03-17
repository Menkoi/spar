import React from "react";
import { MDBAnimation } from "mdbreact";
import Logo from '../img/logo_nav.png';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <nav class="navbar navbar-inverse elegant-color" sticky="top">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-light">
        <a href="./spar">
          <img src={Logo} className="NavPhoto" alt=""></img>
          </a>
        </span>
        <MDBAnimation type="pulse" infinite>

          <button type="button" class="btn grey lighten-4 btn-sm" href="/LoginPage">
          <Link to="/Login" class="nav-link text-dark"> Login</Link>
          </button>
          
          <button
            type="button" class="btn btn-danger btn-sm">
            <Link to="/Register" class="nav-link text-dark"> Register</Link>
          </button>
        </MDBAnimation>
      </div>
    </nav>
  );
}

export default Navbar;
