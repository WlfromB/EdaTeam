import React, { useEffect, useState } from "react";

import { UserPageDish } from "../user-page-dish/user-page-dish";
import { StyledButton, StyledDishes, StyledHeaderDishes } from "./user-page-dishes.styled";
import { URLs } from "../../__data__/urls";
import parseJWT from '../../../utils/decode'
import { RecipeForm } from "../recipe-add-from/recipe-add-form";
export const UserPageDishes = ()=>{

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const decode = parseJWT(localStorage.getItem('token').toString());  
    // useEffect(() => {
    //     const response = fetch(`${URLs.api.main}/recipe/favorites`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(decode.payload.id),
    //     })
    //     const result =
    // // fetch(`${URLs.api.main}/userpage-data`)
    // // .then(response => response.json())
    // // .then(data => {
    // //   setData(data.data.favoritedishes)
    // // })
    // }, []);
    const dataHandler = async ()=>{
        const response = await fetch(`${URLs.api.main}/recipe/favorites`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(decode.payload.id),
                });
        const result = await response.json();
        setData(result);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    return <>
    <StyledDishes className="dishes">                    
    <StyledHeaderDishes>                        
        История
    </StyledHeaderDishes>
    <StyledDishes className="orange-line"></StyledDishes>
    <ul>    
    {currentItems.map((element, index)=>
        (
            <li key={index}>
                <UserPageDish name={element.dishname} href={`${URLs.ui.recipe.url}${element.dishlink}`} title={element.dishname}/>
            </li>
        ))}
    </ul>
    
    </StyledDishes>  
    <StyledDishes className="obertka">
    <StyledDishes className="pagination">
        <StyledButton onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
        </StyledButton>
        <StyledButton onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
        </StyledButton>
    </StyledDishes>
    </StyledDishes>
    </>
}