import React from "react";

//import './style.css';
import { StyledLink } from "./link.styled";
export const Link = (props) => {
    return (
        <StyledLink className={props.ClassName} bottom = {props?.bottom} to={props.Href} >
            {props.children}
        </StyledLink>
    );
};