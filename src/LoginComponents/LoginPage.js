import React from "react";
import LoginNav from "./LoginNav";
import { MDBAnimation } from "mdbreact";

function LoginPage() {
    
    return(
        <div>
            <LoginNav></LoginNav>
            <h1>
                Login
            </h1>
            <MDBAnimation type="flash" infinite>
            <p>Under Construction</p>
            </MDBAnimation>
        </div>
    );
}

export default LoginPage;