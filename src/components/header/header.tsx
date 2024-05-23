import React, { useEffect, useState } from "react";

import { Slogan } from "../slogan-block";
import { LoginSignin } from "../login-signin/login-signin";
import { ImageLogo } from "../image-logo";
import { StyledHeader } from "./header.styled";
import { Link } from '../link';
import { URLs } from "../../__data__/urls";
export const Header = (props:{ isAuthenticated, user, onLoginClick, onLogout })=>{
    return <StyledHeader>
    <ImageLogo/> 
    <Slogan/>
    {props.isAuthenticated ? (
      <>
       <LoginSignin>{`Привет, ${props.user.login}`} user = {props.user}</LoginSignin>
       <button onClick={props.onLogout}>Выйти</button>
      </>
    ) :
    (
      <>
      <LoginSignin onClick={props.onLoginClick} >Войти</LoginSignin>
      </>
    )}
</StyledHeader>
}