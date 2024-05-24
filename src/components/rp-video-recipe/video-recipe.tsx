import React from "react";

import { StyledVideoRecipe } from "./video-recipe.styled";

export const VideoRecipe = (src:any)=>{
    return <StyledVideoRecipe className="video_recipe" src={src.src} frameBorder="0" allowFullScreen></StyledVideoRecipe>
}