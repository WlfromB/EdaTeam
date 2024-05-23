import React from "react";

import { Link } from "../link";

import { StyledLoginSignin } from "./login-signin.styled";
import { URLs } from "../../__data__/urls";
export const LoginSignin = (props:any)=>{
    const href = props?.user ? `${URLs.ui.user.url}` : null;
    return (
    <StyledLoginSignin>
        <Link ClassName="text-login-sigin" Href={href} onClick={props?.onClick}>
            {props.children}
        </Link>        
    </StyledLoginSignin>      
    );
}