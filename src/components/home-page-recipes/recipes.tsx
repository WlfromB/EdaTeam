import React, { useEffect, useState } from "react";

import { StyledRecipes } from "./recipes.style";

import { CardRecipe } from "../home-page-card-recipe";
import { recipes } from "../../assets"
import { URLs } from "../../__data__/urls";



export const Recipes = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(`${URLs.api.main}/homepage-data`)
        .then(response => response.json())
        .then(data => {
          setData(data.data)
        })
    },[])

    return (
        <StyledRecipes>
            {data.map((data, index) => (
                <CardRecipe key={index} srcImg={recipes[`${data.src}`.toString()]} altImg={data.alt} Href={`${URLs.ui.recipe.url}${data.href}`} nameRecipe={data.name} />
            ))}
        </StyledRecipes>
    )
}