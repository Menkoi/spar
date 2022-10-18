import React from "react";
//import Placeholder from "../img/sparbg.webp";
import friends from '../img/friends.webp';
import driving from '../img/driving.webp';
import boxing from '../img/boxing.webp';
import people from '../img/people.webp';
import Gym from '../img/gym.webp';
import light from '../img/light.webp';


export default function Gallery() {
    return(
        <div class="container">
        <div class="row">
          <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col">
              <img
                src={friends}
                class="card-img-top galleryImg"
                alt="..."
              />
            </div>
            <div class="col">
              <img
                src={light}
                class="card-img-top galleryImg"
                alt="..."
              />
            </div>
            <div class="col">
              <img
                src={Gym}
                class="card-img-top galleryImg"
                alt="..."
              />
            </div>
            <div class="col">
              <img
                src={boxing}
                class="card-img-top galleryImg"
                alt="..."
              />
            </div>
            <div class="col">
              <img
                src={people}
                class="card-img-top galleryImg"
                alt="..."
              />
            </div>
            <div class="col">
              <img
                src={driving}
                class="card-img-top galleryImg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    )
}