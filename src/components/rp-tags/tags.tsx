import React, { useEffect, useState } from "react";

import {Tag} from "../rp-tag";
import { TagName } from "../rp-tag-name";

import { StyledTags } from "./tags.styled";


export const Tags = (props)=>{
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('/api/recipe-data')
    .then(response => response.json())
    .then(data => {
      setData(data.tags)
    })
  }, [])

    return( 
    <StyledTags className="tags"> 
        <Tag/>
        {data.map((element, index) => (
                <TagName key={index} href={element.href} name={element.name} />
            ))}        
    </StyledTags>
    );
}