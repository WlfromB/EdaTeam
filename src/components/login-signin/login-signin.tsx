import React from "react";

import { Link } from "../link";

import { StyledLoginSignin } from "./login-signin.styled";
import { URLs } from "../../__data__/urls";
export const LoginSignin = ()=>{
    return (
    <StyledLoginSignin>
        <Link ClassName="text-login-sigin" Href={URLs.ui.user.url} >
            Вход
        </Link>        
    </StyledLoginSignin>      
    );
}