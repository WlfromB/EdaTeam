import React from "react";
import { UserPageLeftBlock } from "../user-page-left-block";
import { UserPageRightBlock } from "../user-page-right-block";
import { UserPageSigninModal } from "../user-page-signin-modal";
import { UserPageLoginModal } from "../user-page-login-modal";
import { StyledMain,
    StyledSection
 } from "./user-page-main.styled";
//import './style.css';
export const UserPageMain = (props)=>
    {
        return <StyledMain>        
        <StyledSection>            
            <UserPageLeftBlock/>            
            <UserPageRightBlock loginUser="Логин пользователя" dateCreated="Зарегистрирован с ..." />  

            <UserPageLoginModal/>            
            <UserPageSigninModal/>
        </StyledSection>       
    </StyledMain>
    }