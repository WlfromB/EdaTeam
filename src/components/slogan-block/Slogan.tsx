import React from "react";

//import './style.css';
import { Link } from "../link";
import { StyledSlogan } from "./slogan.styled";
export const Slogan = (props)=>{
    return <StyledSlogan>
    <Link ClassName="text-slogan" Href="#">
        ГотовимЛегко                
    </Link>
    <Link ClassName="text-slogan" bottom="true" Href="#">
        Оп! И готово! 
    </Link>                   
</StyledSlogan>

}