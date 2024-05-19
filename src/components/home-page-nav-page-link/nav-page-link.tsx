import React from "react";

import { StyledLink } from './link.style'

export const NavLink = (props: any) => {
    return (
        <StyledLink line={props.line} href={props.Href}>
            {props.children}
        </StyledLink>
    );
};
