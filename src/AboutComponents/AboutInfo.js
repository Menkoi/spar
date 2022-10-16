import React from 'react';
import about1 from '../img/about1.webp';

import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa"; 
import {FaChevronRight} from "react-icons/fa";
import {SiMicrosoftoutlook} from "react-icons/si";

function AccInfo() {
  return (
    <div className="container">
      <div class="card text-center" className="Testmoinal">
        <div class="card-body elegant-color" className="TestBody">
          <img src={about1} className="TestImg" alt=""></img>
          <h1 class="text-light">Brandon Burton - 2021230433</h1>
          <p class='text-light'>Singidinum University
          <br></br>
          <a class="text-light" href="https://menkoi.github.io/react-3d/" target='_blank' rel="noreferrer">Portfolio Website <FaChevronRight/></a>
          </p>
          <div class="row align-items-center">
          <div class="col-lg-4 text-lg-left"></div>
            <div class="col-lg-4 my-2 my-lg-0">
              <a class="btn btn-light btn-social mx-3 shadow-lg" href="https://github.com/Menkoi" target='_blank' rel="noreferrer">Github <FaGithub/></a>
              <a class="btn btn-light btn-social mx-3 shadow-lg" href="https://www.linkedin.com/in/brandon-burton-9b59a2215/"target='_blank' rel="noreferrer">linkedin <FaLinkedin/></a>
              <a class="btn btn-light btn-social mx-3 shadow-lg" href="mailto:celaeon@gmail.com">Email <SiMicrosoftoutlook/></a>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default AccInfo;