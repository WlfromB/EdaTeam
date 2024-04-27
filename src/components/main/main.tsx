import React from "react";

import { DishName } from "../dish-name";
import { VideoRecipe } from "../video-recipe";
import { Tags } from "../tags";
import { Table } from "../table";
import { Instruction } from "../instruction";
import { StyledMain } from "./main.styled";

export const Main = (props)=>{
    return( 
        <StyledMain className="content" >      
            <DishName/>      
            <VideoRecipe/>
            <Tags/>
            <Table/>
            <Instruction/>
        </StyledMain>
    );
}

