import React from "react";
import { UserPageLeftBlock } from "../UserPage-LeftBlock";
import { UserPageRightBlock } from "../UserPage-RightBlock";
import { UserPageSigninModal } from "../UserPage-SigninModal";
import { UserPageLoginModal } from "../UserPage-LoginModal";
import './style.css';
export const UserPageMain = (props)=>
    {
        return <main>        
        <section className="section-main">            
            <UserPageLeftBlock/>            
            <UserPageRightBlock loginUser="Логин пользователя" dateCreated="Зарегистрирован с ..." />  

            <UserPageLoginModal/>            
            <UserPageSigninModal/>
        </section>       
    </main>
    }