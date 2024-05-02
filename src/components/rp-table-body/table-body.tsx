import React from "react";
import { StyledTableBRowData } from "./table-body.styled";

export const tableBodyList = [
    { ingredient: "Ингредиент 1", weight: "500 гр", price1: "500р.", price2: "439р.", price3: "600р." },
    { ingredient: "Ингредиент 2", weight: "2 шт", price1: "120р.", price2: "150р.", price3: "130р." },
    { ingredient: "Ингредиент 3", weight: "500 гр", price1: "12р.", price2: "12.99р.", price3: "10р." },
    { ingredient: "Ингредиент 4", weight: "500 гр", price1: "500р.", price2: "439р.", price3: "600р." },
    { ingredient: "Ингредиент 5", weight: "500 гр", price1: "500р.", price2: "439р.", price3: "600р." },
    { ingredient: "Ингредиент 6", weight: "500 гр", price1: "500р.", price2: "439р.", price3: "600р." }
];

export const TableBody = (props) => {
    return (
        <tbody>
            {tableBodyList.map((element, index) => (
                <tr key={index}>
                    <StyledTableBRowData>{element.ingredient}</StyledTableBRowData>
                    <StyledTableBRowData>{element.weight}</StyledTableBRowData>
                    <StyledTableBRowData>{element.price1}</StyledTableBRowData>
                    <StyledTableBRowData>{element.price2}</StyledTableBRowData>
                    <StyledTableBRowData>{element.price3}</StyledTableBRowData>
                </tr>
            ))}
        </tbody>
    );
};