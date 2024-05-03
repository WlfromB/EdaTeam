import React from "react";

import { FooterLink } from "../footer-link/footer-link";
import { logo_img } from "../../assets";

import { StyledFooterLogo } from "./footer-logo-link.styled";

export const FooterLogoLink = (props) => {
    return (
    <a href="#"> 
        <StyledFooterLogo className="logo-footer" src={logo_img} alt="Логотип сайта: вилка и нож"/> 
    </a> 
    );
};
