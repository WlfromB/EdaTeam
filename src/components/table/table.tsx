import React from "react";

import { TableHead } from "../table-head";
import { TableBody } from "../table-body";
import { TableFoot } from "../table-foot";
import { StyledTable } from "./table.styled";

export const Table = (props)=>{
    return( 
        <StyledTable>
            <TableHead/>
            <TableBody/>
            <TableFoot/>
        </StyledTable>
    );
}

