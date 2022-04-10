import React from "react";
import { MDBAnimation } from "mdbreact";
import SparMaps from "./maps";
 

function AccPage() {
    

    return(
        <div class="container">
            <h1>Welcome Guest!</h1>
        <MDBAnimation type="flash" infinite>
          <p>Under Construction</p>
        </MDBAnimation>

        <SparMaps></SparMaps>

        </div>
    );
}

export default AccPage;