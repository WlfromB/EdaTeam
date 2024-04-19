import React from "react";
import { UserPageDishes } from "../UserPage-Dishes/UserPage-Dishes";
import { Link } from "../Link";
import './style.css';
export const UserPageLeftBlock = (props)=>{
    return <div className="left-block">                
    <div className="favorites-block">                    
        <UserPageDishes/>
    </div>    
    <div className="add-recept-block">
        <Link ClassName="a" Href="#">
            Добавить рецепт
        </Link>
    </div>
</div>    
}