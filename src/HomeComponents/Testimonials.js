import React from "react";
import Placeholder from "../img/sparbg.png";

function Testimonials () {
    return (
      <div class="container">
        <h1 className="OurTeams">Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <div class="card text-center" className="Testmoinal">
          <div class="card-body elegant-color" className="TestBody">
            <img src={Placeholder} className="TestImg" alt=""></img>
            <p class="text-light">
              A well-known quote, contained in a blockquote element.
            </p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </div>
        </div>

        <div class="card text-center" className="Testmoinal">
          <div class="card-body elegant-color" className="TestBody">
            <img src={Placeholder} className="TestImg" alt=""></img>
            <p class="text-light">
              A well-known quote, contained in a blockquote element.
            </p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </div>
        </div>
      </div>
    );
}

export default Testimonials;