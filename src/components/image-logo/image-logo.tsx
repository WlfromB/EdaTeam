
import React from "react";

import {logo} from "../../assets";

import {StyledLogoImage} from "./image-logo.styled"

export function LogoImage (){
    return (
    <a href="#"><StyledLogoImage className="logo1" src={logo} alt="Логотип"/></a>
    );
}
