import React from "react";

import { userpagelogo } from "./index";
import { StyledImageLogo } from "./image-logo.styled";
import { Link } from "../link";
import { URLs } from "../../__data__/urls";

export const ImageLogo = ()=>{
    return (
    <Link Href={`${URLs.baseUrl}`} ClassName=" ">
    <StyledImageLogo 
    src={userpagelogo}        
    alt="Логотип фирмы: вилка и нож"
    />
    </Link>
    )
}