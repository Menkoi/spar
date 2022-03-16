import React from "react";
import Placeholder from "../img/sparbg.png";

function Cards() {
return (
  <div class="container">
    <div class="row">
      <div class="row row-cols-1 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card shadow-lg">
            <img src={Placeholder} class="card-img-top"  alt="..." />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-lg">
              <img src={Placeholder} class="card-img-top" alt="..." />
            
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-lg">
            <img src={Placeholder} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Cards;