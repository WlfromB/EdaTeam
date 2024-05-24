import React, { useEffect, useState } from "react";

import { Slogan } from "../slogan-block";
import { LoginSignin } from "../login-signin/login-signin";
import { ImageLogo } from "../image-logo";
import { StyledHeader } from "./header.styled";
import { Link } from '../link';
import { URLs } from "../../__data__/urls";
import parseJWT from '../../../utils/decode'
export const Header = (props:{ isAuthenticated, user, onLoginClick, onLogout })=>{
  let user;
  if(props.user){
    const decode = parseJWT(props.user);   
    user = decode.payload;}
    return <StyledHeader>
    <ImageLogo/> 
    <Slogan/>
    {props.isAuthenticated ? (
      <>
       <LoginSignin user = {user} >{`Привет, ${user.login}`} </LoginSignin>
       <Link ClassName="text-login-sigin-logout" onClick={props.onLogout} Href={`${URLs.baseUrl}`}>Выйти</Link>
      </>
    ) :
    (
      <>
      <LoginSignin onClick={props.onLoginClick} >Войти</LoginSignin>
      </>
    )}
</StyledHeader>
}