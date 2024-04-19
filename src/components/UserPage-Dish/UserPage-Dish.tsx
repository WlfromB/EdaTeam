import React from "react";
import { Link } from "../Link";
import './style.css';
export const UserPageDish = (props)=>{
    return <div className="dish">
    <p>
        {props.name}
    </p>
    <Link ClassName="disha" Href={props.href}>{props.title}</Link>    
    <div className="orange-line-dish"></div>
</div>  
}