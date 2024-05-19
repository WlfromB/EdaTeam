import React from "react";

import { logo_img } from "../../assets";

import { StyledFooterLogo } from "./footer-logo-link.styled";
import { Link } from '../link'
import { URLs } from "../../__data__/urls";

export const FooterLogoLink = () => {
    return (
    <Link Href={`${URLs.baseUrl}`} ClassName={""} bottom="false" > 
        <StyledFooterLogo className="logo-footer" src={logo_img} alt="Логотип сайта: вилка и нож"/> 
    </Link> 
    );
};
