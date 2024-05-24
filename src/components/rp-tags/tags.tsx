import React from "react";

import {Tag} from "../rp-tag";
import { TagName } from "../rp-tag-name";

import { StyledTags } from "./tags.styled";

import { URLs } from "../../__data__/urls";


export const Tags = (props)=>{
    return( 
    <StyledTags className="tags"> 
    
        <Tag/>
        {props.tags.map((element, index) => (
                <TagName key={index} href={`${URLs.baseUrl}${element.href}`} name={element.name} />
            ))}        
    </StyledTags>
    );
}