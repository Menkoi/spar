import React from "react";
import AccInfo from "./AccInfo";
import UserCards from './UserCards';

function AccHome() {

    return (
      <div>
        <div class="container">
          <h1>About</h1>
          <AccInfo></AccInfo>
        </div>
        <UserCards></UserCards>
      </div>
    );
}

export default AccHome;