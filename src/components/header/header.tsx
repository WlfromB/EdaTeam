import React from "react";

import { LogoImage } from "../image-logo"; 
import { LoginLink } from "../login-link";

import { StyledHeader } from "./header.styled";

export const Header = (props)=>{
    return (
    <StyledHeader>
        <LogoImage/> 
        <LoginLink/>
    </StyledHeader>
    );
}