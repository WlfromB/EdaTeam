import React from "react";

//import "./style.css";
import { userIcon, userHeart } from "./index";
import { Link } from "../link";
import { StyledRightBlock,
    StyledRightBlockImage,
    StyledRightBlockParagraph

 } from "./user-page-right-block.styled";
export const UserPageRightBlock = (props)=>{
    return <StyledRightBlock>
    <StyledRightBlockImage src={userIcon} alt="Аватарка профиля" className="image-profile"/>
    <StyledRightBlockParagraph>{props.loginUser}</StyledRightBlockParagraph>
    <StyledRightBlockParagraph>{props.dateCreated}</StyledRightBlockParagraph>
    <StyledRightBlockImage src={userHeart} alt="Переключатель на избранное: сердечко" className="image-favotites"/>
    <Link ClassName="right-block-a" Href="#">История</Link>
</StyledRightBlock>
}