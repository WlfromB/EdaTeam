import React from "react";
import { UserPageDish } from "../UserPage-Dish/UserPage-Dish";
import './style.css';

const dishesData = [
    {name:"Блюдо",href:"#01",title:"Ссылка"},
    {name:"Блюдо",href:"#02",title:"Ссылка"},
    {name:"Блюдо",href:"#03",title:"Ссылка"},
    {name:"Блюдо",href:"#04",title:"Ссылка"}
];

export const UserPageDishes = (props)=>{
    return <div className="dishes">                    
    <h2>                        
        История
    </h2>
    <div className="orange-line"></div>
    <ul>
    {dishesData.map((element, index)=>
        (
            <li key={element.href}>
                <UserPageDish name={element.name} href={element.href} title={element.title}/>
            </li>
        ))}
    </ul>
    </div>  
}