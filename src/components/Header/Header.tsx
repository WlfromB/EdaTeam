import React from "react";

import './style.css';

import { Slogan } from "../SloganBlock";
import { LoginSignin } from "../LoginSignin/LoginSignin";
import { ImageLogo } from "../ImageLogo";
export const Header = (props)=>{
    return <header>
    <ImageLogo/> 
    <Slogan/>
    <LoginSignin/>
</header>
}