import React, { useEffect, useState } from "react";

// import { tableBodyList } from "../rp-table-body/table-body";
import {StyledTableBRowData} from "../rp-table-body/table-body.styled";

// const totalPrices = { price1: 0, price2: 0, price3: 0 };


export const TableFoot = (props)=>{
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('/api/recipe-data')
    .then(response => response.json())
    .then(data => {
      setData(data.table)
    })
  }, [])

  const totalPrices = data.reduce((acc, item) => {
    acc.price1 += parseFloat(item.price1);
    acc.price2 += parseFloat(item.price2);
    acc.price3 += parseFloat(item.price3);
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

