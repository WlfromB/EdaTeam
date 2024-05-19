import React from "react";

import { UserPageDishes } from "../user-page-dishes.ts/user-page-dishes";
import { Link } from "../link";
import {StyledLeftBlockes} from "./user-page-left-block.styled";

export const UserPageLeftBlock = ()=>{
    return <StyledLeftBlockes className="left-block">                
    <StyledLeftBlockes className="favorites-block">                    
        <UserPageDishes/>
    </StyledLeftBlockes>    
    <StyledLeftBlockes className="add-recept-block">
        <Link ClassName="add-recept-a" Href="#">
            Добавить рецепт
        </Link>
    </StyledLeftBlockes>
</StyledLeftBlockes>    
}