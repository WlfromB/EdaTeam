import React, { useEffect, useState } from "react";

import { UserPageDish } from "../user-page-dish/user-page-dish";
import { StyledDishes, StyledHeaderDishes } from "./user-page-dishes.styled";
import { URLs } from "../../__data__/urls";

export const UserPageDishes = (props)=>{

    const [data, setData] = useState([])
    useEffect(() => {
    fetch(`${URLs.api.main}/userpage-data`)
    .then(response => response.json())
    .then(data => {
      setData(data.data.favoritedishes)
    })
  }, [])
    return <StyledDishes className="dishes">                    
    <StyledHeaderDishes>                        
        История
    </StyledHeaderDishes>
    <StyledDishes className="orange-line"></StyledDishes>
    <ul>    
    {data.map((element, index)=>
        (
            <li key={index}>
                <UserPageDish name={element.dishname} href={`${URLs.ui.recipe.url}${element.dishlink}`} title={element.dishname}/>
            </li>
        ))}
    </ul>

    </StyledDishes>  
}