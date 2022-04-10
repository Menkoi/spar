import React from "react";
import LoginNav from "./LoginNav";
import LoginForm from"./LoginForm";
import RegisterForm from "./RegisterForm";

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