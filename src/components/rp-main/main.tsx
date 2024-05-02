import React from "react";

import { DishName } from "../rp-dish-name";
import { VideoRecipe } from "../rp-video-recipe";
import { Tags } from "../rp-tags";
import { Table } from "../rp-table";
import { Instruction } from "../rp-Instruction";
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

