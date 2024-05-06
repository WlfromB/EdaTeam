import React from "react";

import { StyledTagName } from "./tag-name.styled";

export const TagName = (props)=>{
    return   <StyledTagName href={props.href} className="tag-link">{props.name}</StyledTagName> 
}