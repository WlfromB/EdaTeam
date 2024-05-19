import React from "react";

import { userpagelogo } from "./index";
import { StyledImageLogo } from "./image-logo.styled";

export const ImageLogo = ()=>{
    return <StyledImageLogo 
    src={userpagelogo}        
    alt="Логотип фирмы: вилка и нож"
    />
}