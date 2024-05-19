import React from "react";

import { Link } from "../link";

import { StyledSlogan } from "./slogan.styled";
import { URLs } from "../../__data__/urls";

export const Slogan = ()=>{
    return <StyledSlogan>
    <Link ClassName="text-slogan" Href={URLs.baseUrl}>
        ГотовимЛегко                
    </Link>
    <Link ClassName="text-slogan" bottom="true" Href={URLs.baseUrl}>
        Оп! И готово! 
    </Link>                   
</StyledSlogan>

}