import React from "react";

import { Slogan } from "../slogan-block";
import { LoginSignin } from "../login-signin/login-signin";
import { ImageLogo } from "../image-logo";
import { StyledHeader } from "./header.styled";
export const Header = ()=>{
    return <StyledHeader>
    <ImageLogo/> 
    <Slogan/>
    <LoginSignin/>
</StyledHeader>
}