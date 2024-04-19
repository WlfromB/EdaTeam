import React from "react";

import "./style.css";
import { userIcon, userHeart } from "../../assets";
import { Link } from "../Link";
export const UserPageRightBlock = (props)=>{
    return <div className="right-block">
    <img src={userIcon} alt="Аватарка профиля" className="image-profile"/>
    <p>{props.loginUser}</p>
    <p>{props.dateCreated}</p>
    <img src={userHeart} alt="Переключатель на избранное: сердечко" className="image-favotites"/>
    <Link ClassName="RightBlocka" Href="#">История</Link>
</div>
}