import React from "react";
import Placeholder from '../img/sparbg.png'
import Teams1 from '../img/teams1.png'
import Teams2 from '../img/teams2.png'
import Teams3 from '../img/teams3.jpg'

function Teams() {
return (
  <div>
    <h1>Our Amazing Team</h1>
    <p>
      Check out some of the people who help make Spar become what it is today.
    </p>

    <div class="container">
      <div class="row">
        <div class="row row-cols-1 row-cols-lg-3 g-4">
          <div class="col">
            <img
              src={Teams1}
              class="card-img-top shadow-lg rounded-circle"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">Brandon Burton</p>
              <p class="card-text">
                <small class="text-muted">Frontend Developer</small>
              </p>
            </div>
          </div>

          <div class="col">
            <img
              src={Teams2}
              class="card-img-top shadow-lg rounded-circle"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">Miroslav Popović</p>
              <p class="card-text">
                <small class="text-muted">Business Manager</small>
              </p>
            </div>
          </div>

          <div class="col">
            <img
              src={Teams3}
              class="card-img-top shadow-lg rounded-circle"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">Barry</p>
              <p class="card-text">
                <small class="text-muted">Moral Support</small>
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