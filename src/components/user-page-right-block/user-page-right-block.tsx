import React from "react";

import { userIcon, userHeart } from "./index";
import { Link } from "../link";
import { StyledRightBlock,
    StyledRightBlockImage,
    StyledRightBlockParagraph

 } from "./user-page-right-block.styled";
 import parseJWT from '../../../utils/decode'
export const UserPageRightBlock = ()=>{
    const decode = parseJWT(localStorage.getItem('token').toString());
    const login = decode.payload.login;
    const dateCreated = decode.payload.dateCreated;
    return <StyledRightBlock>
    <StyledRightBlockImage src={userIcon} alt="Аватарка профиля" className="image-profile"/>
    <StyledRightBlockParagraph>{login}</StyledRightBlockParagraph>
    <StyledRightBlockParagraph>{`Зарегистрирован с ...${dateCreated}`}</StyledRightBlockParagraph>
    <StyledRightBlockImage src={userHeart} alt="Переключатель на избранное: сердечко" className="image-favotites"/>
    <Link ClassName="right-block-a" >История</Link>
</StyledRightBlock>
}