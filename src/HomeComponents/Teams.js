import React from "react";
import Placeholder from '../img/sparbg.png'

function Teams() {
return (
  <div>
    <h1>Our Amazing Team</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
      amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
      nostrum quisquam eum porro a pariatur veniam.
    </p>

    <div class="container">
      <div class="row">
        <div class="row row-cols-1 row-cols-lg-3 g-4">
          <div class="col">
            <img
              src={Placeholder}
              class="card-img-top shadow-lg rounded-circle"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">Name</p>
              <p class="card-text">
                <small class="text-muted">Job Title</small>
              </p>
            </div>
          </div>

          <div class="col">
            <img
              src={Placeholder}
              class="card-img-top shadow-lg rounded-circle"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">Name</p>
              <p class="card-text">
                <small class="text-muted">Job Title</small>
              </p>
            </div>
          </div>

          <div class="col">
            <img
              src={Placeholder}
              class="card-img-top shadow-lg rounded-circle"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">Name</p>
              <p class="card-text">
                <small class="text-muted">Job Title</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Teams;