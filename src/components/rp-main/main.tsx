import React, { useEffect, useState } from "react";

import { DishName } from "../rp-dish-name";
import { VideoRecipe } from "../rp-video-recipe";
import { Tags } from "../rp-tags";
import { Table } from "../rp-table";
import { Instruction } from "../rp-Instruction";
import { StyledMain } from "./main.styled";
import { useParams } from "react-router-dom";
import { URLs } from "../../__data__/urls";


export const Main = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`${URLs.api.main}/main/recipe`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id })
                });
                const data = await response.json();
                setRecipe(data.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }
    return( 
        <StyledMain className="content" >      
            <DishName name = {recipe.name}/>      
            <VideoRecipe src = {recipe.linkVideo}/>
            <Tags tags ={recipe.tags}/>
            <Table data = {recipe.ingredients}/>
            <Instruction data = {recipe.description}/>
        </StyledMain>
    );
}

