import React from 'react';
import about1 from '../img/about1.webp';

function AccInfo() {
    return(
        <div class="container">
            <div class="card text-center" className="Testmoinal">
          <div class="card-body elegant-color" className="TestBody">
            <img src={about1} className="TestImg" alt=""></img>
            <p class="text-light">
              Brandon Burton - 2021230433
            </p>
            <footer class="text-light">
              <p>Singidinum University</p>
            </footer>
          </div>
          <div className="spacer"></div>
        </div>
        </div>
    )
}

export default AccInfo;