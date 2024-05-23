import React from "react";

import { StyledLink } from "./link.styled";
import { To } from "react-router-dom";

interface LinkProps{
    bottom?:string;
    ClassName?:string;
    Href?:string|To;
    children?:any;
    onClick?:any;
}

export const Link = (props: LinkProps) => {
    return (
        <StyledLink className={props.ClassName} bottom = {props?.bottom} to={props?.Href} onClick={props?.onClick}>
            {props.children}
        </StyledLink>
    );
};
