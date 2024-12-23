import React, { useEffect, useState } from "react";

import { StyledDishName } from "./dish-name.styled";

export const DishName = ()=>{
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('/api/recipe-data')
    .then(response => response.json())
    .then(data => {
      setData(data.name)
    })
  }, [])

    return <StyledDishName> {data }</StyledDishName>

}