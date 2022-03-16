import React from "react";
import Logo from "../img/logo_nav.png"

function LoginNav () {
    return(
        <nav class="navbar navbar-inverse elegant-color">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-light">
          <img src={Logo} className="NavPhoto" alt=""></img>
        </span>
      </div>
    </nav>
    );
}

export default LoginNav;