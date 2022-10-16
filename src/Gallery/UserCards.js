import React from "react";
//import Placeholder from "../img/sparbg.webp";
import friends from '../img/friends.webp';
import driving from '../img/driving.webp';
import boxing from '../img/boxing.webp';
import people from '../img/people.webp';
import Gym from '../img/gym.webp';
import light from '../img/light.webp';

function UserCards() {
  return (
    <div class="gallery">
      <img src={people}  alt="..." className="img"/>
      <img src={driving}  alt="..." className="img"/>
      <img src={boxing}  alt="..." className="img"/>

      <img src={Gym}  alt="..." className="img"/>
      <img src={friends}  alt="..." className="img"/>
      <img src={light}  alt="..." className="img"/>
    </div>
  );
}

export default UserCards;