import React from "react";

import { person } from "../../assets";

import { StyledLoginLink, StyledLogoEnter } from "./login-link.styled";

export function LoginLink() {
  return (
 
   <a href="#" className="link-enter"> 
      <StyledLogoEnter src={person} alt="Картинка человечка"/> 
      <StyledLoginLink>Войти </StyledLoginLink> 
    </a> 
  );
}