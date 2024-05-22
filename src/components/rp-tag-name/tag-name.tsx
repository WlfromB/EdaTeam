import React from "react";

import { StyledTagName } from "./tag-name.styled";

export const TagName = (props:any)=>{
    return   <StyledTagName to={props.href} className="tag-link">{props.name}</StyledTagName> 
}