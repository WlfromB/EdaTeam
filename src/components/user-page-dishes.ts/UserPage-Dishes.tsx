import React from "react";

import { UserPageDish } from "../user-page-dish/UserPage-Dish";
import { StyledDishes, StyledHeaderDishes } from "./user-page-dishes.styled";
//import './style.css';

const dishesData = [
    {name:"Блюдо",href:"#01",title:"Ссылка"},
    {name:"Блюдо",href:"#02",title:"Ссылка"},
    {name:"Блюдо",href:"#03",title:"Ссылка"},
    {name:"Блюдо",href:"#04",title:"Ссылка"}
];

export const UserPageDishes = (props)=>{
    return <StyledDishes className="dishes">                    
    <StyledHeaderDishes>                        
        История
    </StyledHeaderDishes>
    <StyledDishes className="orange-line"></StyledDishes>
    <ul>
    {dishesData.map((element, index)=>
        (
            <li key={element.href}>
                <UserPageDish name={element.name} href={element.href} title={element.title}/>
            </li>
        ))}
    </ul>
    </StyledDishes>  
}