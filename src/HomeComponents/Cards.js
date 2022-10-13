import React from "react";
import Atlanta from "../img/Atlanta.webp";
import NewYork from "../img/NewYork.webp";
import Chicago from "../img/Chicago.webp";

function Cards() {
return (
  <div class="container">
    <div class="row">
      <div class="row row-cols-1 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card shadow-lg">
            <img src={Atlanta} class="card-img-top"  alt="..." />
            <div class="card-body">
              <h5 class="card-title">Atlanta</h5>
              <p class="card-text">
                Our users in Atlanta have said many great things about their 
                experience with Spar. If you live in the downtown Atlanta area,
                then Spar is a must have.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-lg">
              <img src={NewYork} class="card-img-top" alt="..." />
            
            <div class="card-body">
              <h5 class="card-title">New York</h5>
              <p class="card-text">
                Brooklyn, Manhattan, Bronx, Staten Island, Queens no matter what 
                burrow your from, Spar lets you become the leader of each or rule
                them all.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-lg">
            <img src={Chicago} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Chicago</h5>
              <p class="card-text">
                The age of Al Capone is over. The time for Spar is now. The city of
                "Chiraq" is know for its hardcore citizens. The competition is high.
                Do you have what it takes?
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