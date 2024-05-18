import React from "react";
import { Link } from "../link";
//import './style.css';
import { StyledParagraph, StyledBlock } from "./user-page-dish.styled";
export const UserPageDish = (props)=>{
    return <StyledBlock className="dish">
    <StyledParagraph>
        {props.name}
    </StyledParagraph>
    <Link ClassName="disha" Href={props.href}>{props.title}</Link>    
    <StyledBlock className="orange-line-dish"></StyledBlock>
</StyledBlock>  
}