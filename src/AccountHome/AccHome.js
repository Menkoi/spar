import React from "react";
import AccNav from "./AccNav";
import { MDBAnimation } from "mdbreact";
import SparMaps from "./maps";
import AccInfo from "./AccInfo";

function AccHome() {

    return (
      <div>
        <AccNav></AccNav>
        <div class="container">
          <h1>Welcome Guest!</h1>
          <MDBAnimation type="flash" infinite>
            <p>Under Construction</p>
          </MDBAnimation>
          <AccInfo></AccInfo>
        </div>

        <SparMaps></SparMaps>
      </div>
    );
}

export default AccHome;