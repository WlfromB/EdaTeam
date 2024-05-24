import React, { useEffect, useState } from "react";

import { StyledRecipes } from "./recipes.style";

import { CardRecipe } from "../home-page-card-recipe";
import { recipes } from "../../assets"
import { URLs } from "../../__data__/urls";



export const Recipes = (props:any) => {    
    const data = props.recipes;
    return (
        <StyledRecipes>
            {data.map((element, index) => (            
                   <CardRecipe key={index}
                    srcImg={element.linkImage} 
                    altImg={`Фотография ${element.name}`}
                    Href={`${URLs.ui.recipe.getUrl(element.id)}`}
                    nameRecipe={element.name} />
            ))}
        </StyledRecipes>
    )
}