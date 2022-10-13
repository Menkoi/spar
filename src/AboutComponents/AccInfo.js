import React from 'react';
import Placeholder from '../img/sparbg.png';

function AccInfo() {
    return(
        <div class="container">
            <div class="card text-center" className="Testmoinal">
          <div class="card-body elegant-color" className="TestBody">
            <img src={Placeholder} className="TestImg" alt=""></img>
            <p class="text-light">
              Lorem Ipsum
            </p>
            <footer class="text-light">
              <p>Lorem Ipsum</p>
            </footer>
          </div>
        </div>
        </div>
    )
}

export default AccInfo;