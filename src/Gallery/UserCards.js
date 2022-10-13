import React from "react";
import Placeholder from "../img/sparbg.png"

function UserCards() {
    return(
        <div class="container-fluid">
            <h1>Gallery</h1>
        <div class="row LoginCard">
          <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            <div class="col">
              <div class="card shadow-md">
                <img src={Placeholder} class="card-img-top"  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                </div>
              </div>
            </div>
    
            <div class="col">
              <div class="card shadow-md">
                <img src={Placeholder} class="card-img-top"  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-md">
                <img src={Placeholder} class="card-img-top"  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-md">
                <img src={Placeholder} class="card-img-top"  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-md">
                <img src={Placeholder} class="card-img-top"  alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    )
}

export default UserCards;