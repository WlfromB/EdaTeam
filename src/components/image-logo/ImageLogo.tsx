import React from "react";

import { userpagelogo } from "./index";
import { StyledImageLogo } from "./image-logo.styled";
//import './style.css';
export const ImageLogo = (props)=>{
    return <StyledImageLogo 
    src={userpagelogo}        
    alt="Логотип фирмы: вилка и нож"
    />
}