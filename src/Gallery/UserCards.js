import React from "react";
import Placeholder from "../img/sparbg.webp";
import friends from '../img/friends.webp';
import driving from '../img/driving.webp';
import boxing from '../img/boxing.webp';
import people from '../img/people.webp';
import Gym from '../img/gym.webp';

function UserCards() {
    return(
        <div class="container-fluid">
            <h1>Gallery</h1>
        <div class="row LoginCard">
          <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            <div class="col">
              <div class="card shadow-md">
                <img src={friends} class="card-img-top"  alt="..." />
              </div>
            </div>
    
            <div class="col">
              <div class="card shadow-md">
                <img src={driving} class="card-img-top"  alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card shadow-md">
                <img src={Gym} class="card-img-top"  alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card shadow-md">
                <img src={boxing} class="card-img-top"  alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card shadow-md">
                <img src={people} class="card-img-top"  alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    )
}

export default UserCards;