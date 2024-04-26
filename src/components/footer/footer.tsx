import React from "react";

import { FooterLinks } from "../footer-links";
import { FooterLogoLink } from "../footer-logo-link";

import { StyledFooter } from "./footer.styled";

export const Footer = (props)=>{
    return (
    <StyledFooter> 
        <FooterLinks/>
        <FooterLogoLink/>
    </StyledFooter>      
    );
}