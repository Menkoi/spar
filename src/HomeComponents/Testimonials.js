import React from "react";
import PersonOne from "../img/PersonOne.webp";
import PersonTwo from "../img/PersonTwo.webp";


function Testimonials () {
    return (
      <div className="container">
        <h1 className="OurTeams">Testimonials</h1>
        <p>
          Dont believe us? Look at what users are saying about about Spar!
        </p>
        <div class="card text-center" className="Testimoinal">
          <div class="card-body elegant-color" className="TestBody">
            <img src={PersonOne} className="TestImg" alt=""></img>
            <p class="text-light">
              "I have always wanted to be recognized by my local community
              and thanks to Spar, I finally got it!"
            </p>
            <footer class="blockquote-footer text-light">
              Marques Brown <cite title="Source Title">New York</cite>
            </footer>
          </div>
        </div>

        <div class="card text-center" className="Testimoinal">
          <div class="card-body elegant-color" className="TestBody">
            <img src={PersonTwo} className="TestImg" alt=""></img>
            <p class="text-light">
              "I was looking for a way to stay in shape and Spar 
              was the perfect tool to achieve my goals!"
            </p>
            <footer class="blockquote-footer text-light">
              John Titor <cite title="Source Title" >Atlanta</cite>
            </footer>
          </div>
        </div>
      </div>
    );
}

export default Testimonials;