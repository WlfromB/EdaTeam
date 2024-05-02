import React from "react";

import { StyledTableHeadRow } from "./table-head.styled";
import { StyledTableHead } from "./table-head.styled";

export const TableHead = (props)=>{
    return( 
    <StyledTableHead>
        <tr>
            <StyledTableHeadRow>Ингредиенты</StyledTableHeadRow>
            <StyledTableHeadRow>Количество</StyledTableHeadRow>
            <StyledTableHeadRow>Сбермаркет</StyledTableHeadRow>
            <StyledTableHeadRow>Самокат</StyledTableHeadRow>
            <StyledTableHeadRow>Озон Fresh</StyledTableHeadRow>
        </tr>
    </StyledTableHead>
    );
}