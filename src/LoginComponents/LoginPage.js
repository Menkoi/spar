import React from "react";
import LoginNav from "./LoginNav";
import LoginForm from"./LoginForm";
import RegisterForm from "./RegisterForm";
//import { MDBAnimation } from "mdbreact";

function LoginPage() {
    
    return(
        <div>
            <LoginNav></LoginNav>
            <LoginForm></LoginForm>
            <RegisterForm></RegisterForm>
        </div>
    );
}

export default LoginPage;