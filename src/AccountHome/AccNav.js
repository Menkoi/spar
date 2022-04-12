import React from "react";
import { MDBAnimation } from "mdbreact";
import Logo from '../img/logo_nav.png';
import {Link} from 'react-router-dom';

function AccNav() {
    return(
        <nav class="navbar navbar-inverse elegant-color">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-light">
            <img src={Logo} className="NavPhoto" alt=""></img>
          </span>
          <MDBAnimation type="pulse" infinite>  
            <button
              type="button" class="btn btn-danger btn-sm">
              <Link to="/spar" class="nav-link text-dark"> Logout</Link>
            </button>
          </MDBAnimation>
        </div>
      </nav>
    );
}

export default AccNav;