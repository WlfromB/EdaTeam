import React  from "react";

//import './style.css';
import { StyledLoginSpan ,
         StyledLoginDivs , 
         StyledLoginHeader ,
         StyledLoginForm, 
         StyledLoginInput,
         StyledLoginButton
} from "./user-page-login-modal.styled";
import { Link } from "../link";

export const UserPageLoginModal = (props)=>{
    return <StyledLoginDivs className="modal">                
    <StyledLoginDivs className="modal-content">        
        <StyledLoginSpan>&times;</StyledLoginSpan>          
      <StyledLoginHeader>Вход в аккаунт</StyledLoginHeader>                  
      <StyledLoginForm>
        <StyledLoginInput type="text" id="login-username" name="username" className="input-block" placeholder="Имя пользователя"/>
        <StyledLoginInput type="password" id="login-password" name="password" className="input-block" placeholder="Пароль"/>
        <StyledLoginButton type="submit" className="submit-button" >Войти</StyledLoginButton>
        <Link Href="#" id="signinLink" ClassName="signin-link">Зарегистрироваться</Link>
      </StyledLoginForm>
    </StyledLoginDivs>
</StyledLoginDivs>
}