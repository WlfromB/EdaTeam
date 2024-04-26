import React from "react";

import {Tag} from "../tag";
import { TagName } from "../tag-name";

import { StyledTags } from "./tags.styled";

const tagList=[
    { name: "#блины", href: "#01" },
    { name: "#вишня", href: "#02" },
    { name: "#молоко", href: "#03" }
];

export const Tags = (props)=>{
    return( 
    <StyledTags className="tags"> 
        <Tag/>
        {tagList.map((element, index) => (
                <TagName key={index} href={element.href} name={element.name} />
            ))}        
    </StyledTags>
    );
}