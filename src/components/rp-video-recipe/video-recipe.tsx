import React from "react";

import { StyledVideoRecipe } from "./video-recipe.styled";

export const VideoRecipe = (props)=>{
    return <StyledVideoRecipe className="video_recipe" src="https://www.youtube.com/embed/EBbwrtTzTVQ" frameBorder="0" allowFullScreen></StyledVideoRecipe>
}