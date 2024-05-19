import React, { useEffect, useState } from "react";
import { StyledTableBRowData } from "./table-body.styled";
import { URLs } from "../../__data__/urls";


export const TableBody = () => {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch(`${URLs.api.main}/recipe-data`)
    .then(response => response.json())
    .then(data => {
      setData(data.table)
    })
  }, [])
    return (
        <tbody>
            {data.map((element, index) => (
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