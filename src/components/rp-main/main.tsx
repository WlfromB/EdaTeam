import React, { useEffect, useState } from "react";

import { DishName } from "../rp-dish-name";
import { VideoRecipe } from "../rp-video-recipe";
import { Tags } from "../rp-tags";
import { Table } from "../rp-table";
import { Instruction } from "../rp-Instruction";
import { StyledMain } from "./main.styled";
import { useParams } from "react-router-dom";
import { URLs } from "../../__data__/urls";
import parseJWT from '../../../utils/decode'

export const Main = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    let decode;
    const token = localStorage.getItem('token');
    if(token){
        decode = parseJWT(token);
    }
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
    const handleAddFavorite = async () => {
        try {
            const response = await fetch(`${URLs.api.main}/main/favorites`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
                body: JSON.stringify({ userId:decode.payload.id, recipeId: id })
            });
            const data = await response.json();
            if (data.success) {
                setIsFavorite(true);
            }
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };
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
            {token && <button onClick={handleAddFavorite} disabled={isFavorite}>
                {isFavorite ? "В избранном" : "Добавить в избранное"}
            </button>}
        </StyledMain>
    );
}

