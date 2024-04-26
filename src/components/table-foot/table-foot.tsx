import React from "react";

import { tableBodyList } from "../table-body/table-body";
import {StyledTableBRowData} from "../table-body/table-body.styled";

const totalPrices = { price1: 0, price2: 0, price3: 0 };

tableBodyList.forEach(item => {
    totalPrices.price1 += parseFloat(item.price1);
    totalPrices.price2 += parseFloat(item.price2);
    totalPrices.price3 += parseFloat(item.price3);
});

export const TableFoot = (props)=>{
    return( 
    <tfoot>
         <tr>
            <StyledTableBRowData colSpan={2}>Общая стоимость блюда</StyledTableBRowData>
            <StyledTableBRowData>{totalPrices.price1}р.</StyledTableBRowData>
            <StyledTableBRowData>{totalPrices.price2}р.</StyledTableBRowData>
            <StyledTableBRowData>{totalPrices.price3}р.</StyledTableBRowData>
        </tr>
    </tfoot>
    );
}

