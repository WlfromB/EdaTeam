import React from "react";

import {StyledTableBRowData} from "../rp-table-body/table-body.styled";

export const TableFoot = (data:any)=>{
  const totalPrices = data.data.data.reduce((acc, item) => {
    acc.price1 += parseFloat(item.price1.substr(0,item.price1.length-2));
    acc.price2 += parseFloat(item.price2.substr(0,item.price2.length-2));
    acc.price3 += parseFloat(item.price3.substr(0,item.price3.length-2));
    return acc;
}, { price1: 0, price2: 0, price3: 0 });

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

