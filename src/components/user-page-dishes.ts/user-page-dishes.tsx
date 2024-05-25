import React, { useEffect, useState } from "react";

import { UserPageDish } from "../user-page-dish/user-page-dish";
import { StyledButton, StyledDishes, StyledHeaderDishes } from "./user-page-dishes.styled";
import { URLs } from "../../__data__/urls";
import parseJWT from '../../../utils/decode';

export const UserPageDishes = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const decode = parseJWT(localStorage.getItem('token').toString());

    useEffect(() => {
        const dataHandler = async () => {
            const response = await fetch(`${URLs.api.main}/main/get-favorites`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: decode.payload.id }),
            });
            const result = await response.json();
            if (result.success) {
                setData(result.data);
            }
        };
        dataHandler();
    }, [decode.payload.id]);

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

    return (
        <>
            <StyledDishes className="dishes">
                <StyledHeaderDishes>Избранное</StyledHeaderDishes>
                <StyledDishes className="orange-line"></StyledDishes>
                <ul>
                    {currentItems.map((element, index) => (
                        <li key={index}>
                            <UserPageDish name={element.name} href={`${URLs.ui.recipe.getUrl(element._id)}`} title={element.name} />
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
    );
};
