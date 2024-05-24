import React, { useEffect, useState } from "react";

import { StyledRecipes } from "./recipes.style";

import { CardRecipe } from "../home-page-card-recipe";
import { recipes } from "../../assets"
import { URLs } from "../../__data__/urls";



export const Recipes = (props:any) => {
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch(`${URLs.api.main}/homepage-data`)
    //     .then(response => response.json())
    //     .then(data => {
    //       setData(data.data)
    //     })
    // },[])
    const data = props.recipes;
    return (
        <StyledRecipes>
            {data.map((element, index) => (
                // <CardRecipe key={index}
                //  srcImg={recipes[`${data.src}`.toString()]} 
                //  altImg={data.alt}
                //   Href={`${URLs.ui.recipe.url}${data.href}`}
                //    nameRecipe={data.name} />
                   <CardRecipe key={index}
                    srcImg={element.linkImage} 
                    altImg={`Фотография ${element.name}`}
                    Href={`${URLs.ui.recipe.url}${element.id}`}
                    nameRecipe={element.name} />
            ))}
        </StyledRecipes>
    )
}