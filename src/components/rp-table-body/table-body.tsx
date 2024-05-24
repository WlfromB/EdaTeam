import React from "react";

import { StyledTableBRowData } from "./table-body.styled";


export const TableBody = (props:any) => {
    
    return (
        <tbody>
            {props.data.data.map((element, index) => (
                <tr key={index}>
                    <StyledTableBRowData>{element.name}</StyledTableBRowData>
                    <StyledTableBRowData>{element.weight}</StyledTableBRowData>
                    <StyledTableBRowData>{element.price1}</StyledTableBRowData>
                    <StyledTableBRowData>{element.price2}</StyledTableBRowData>
                    <StyledTableBRowData>{element.price3}</StyledTableBRowData>
                </tr>
            ))}
        </tbody>
    );
};