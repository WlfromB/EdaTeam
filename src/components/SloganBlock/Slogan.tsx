import React from "react";

import './style.css';
import { Link } from "../Link";

export const Slogan = (props)=>{
    return <div className="slogan">
    <Link ClassName="text-slogan" Href="#">
        ГотовимЛегко                
    </Link>
    <Link ClassName="text-slogan bottom" Href="#">
        Оп! И готово! 
    </Link>                   
</div>

}