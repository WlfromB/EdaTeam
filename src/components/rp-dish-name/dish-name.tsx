import React from "react";

import { StyledDishName } from "./dish-name.styled";

export const DishName = (name:any)=>{

    return <StyledDishName> {name.name }</StyledDishName>

}