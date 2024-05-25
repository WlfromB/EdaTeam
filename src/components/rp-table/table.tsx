import React from "react";

import { TableHead } from "../rp-table-head";
import { TableBody } from "../rp-table-body";
import { TableFoot } from "../rp-table-foot";
import { StyledTable } from "./table.styled";

export const Table = (data:any)=>{
    return( 
        <StyledTable>
            <TableHead/>
            <TableBody data = {data}/>
            <TableFoot data = {data}/>
        </StyledTable>
    );
}

