import React from "react";
import Atlanta from "../img/Atlanta.webp";
import NewYork from "../img/NewYork.webp";
import Chicago from "../img/Chicago.webp";

function Cards() {
return (
  <div className="container">
    <div className="row">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card shadow-lg">
            <img src={Atlanta} className="card-img-top"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Atlanta</h5>
              <p className="card-text">
                Our users in Atlanta have said many great things about their 
                experience with Spar. If you live in the downtown Atlanta area,
                then Spar is a must have.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg">
              <img src={NewYork} className="card-img-top" alt="..." />
            
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">
                Brooklyn, Manhattan, Bronx, Staten Island, Queens no matter what 
                burrow your from, Spar lets you become the leader of each or rule
                them all.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg">
            <img src={Chicago} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Chicago</h5>
              <p className="card-text">
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