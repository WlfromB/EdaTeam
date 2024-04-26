import React from "react";

//import './style.css';

import { Slogan } from "../slogan-block";
import { LoginSignin } from "../login-signin/LoginSignin";
import { ImageLogo } from "../image-logo";
import { StyledHeader } from "./header.styled";
export const Header = (props)=>{
    return <StyledHeader>
    <ImageLogo/> 
    <Slogan/>
    <LoginSignin/>
</StyledHeader>
}