import React from "react";

import { Link } from "../link";
//import './style.css';
import { StyledLoginSignin } from "./login-signin.styled";
export const LoginSignin = (props)=>{
    return <StyledLoginSignin>
    <Link ClassName="text-login-sigin" Href="#" >
        Вход
    </Link>        
</StyledLoginSignin>      
}