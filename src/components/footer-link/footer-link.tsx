import React from "react";

import { StyledFooterCaption } from "./footer-link.styled";
import { StyledFooterTg } from "./footer-link.styled";

import { logo_tg } from "../../assets";
import { StyledFooterLink } from "./footer-link.styled";


export const FooterLink = (props)=>{
    return (
    <StyledFooterLink href={props.href} className="link-tg"> 
        <StyledFooterTg className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
        <StyledFooterCaption className="link-tg-text">{props.name}</StyledFooterCaption> 
    </StyledFooterLink> 
    );
}