import React from "react";

//import './style.css';
import { StyledSigninButton,
        StyledSigninDivs, 
        StyledSigninForm,
        StyledSigninHeader,
        StyledSigninInput,
        StyledSigninSpan
} from "./user-page-signin-modal.styled";
export const UserPageSigninModal = ()=>
    {
        return <StyledSigninDivs id="signinModal" className="signin-modal">
        <StyledSigninDivs className="signin-modal-content">
            <StyledSigninSpan  className = "close-signin">&times; </StyledSigninSpan>
            <StyledSigninHeader className="signin-header-modal">Регистрация</StyledSigninHeader>
            <StyledSigninForm className="signin-form">
                <StyledSigninInput type="text" id="sigin-username" name="username" className="signin-input-block" placeholder="Имя пользователя"/>
                <StyledSigninInput type="password" id="sigin-password" name="password" className="signin-input-block" placeholder="Пароль"/> 
                <StyledSigninInput type="password" id="an-sign-password" name="password" className="signin-input-block" placeholder="Повторите пароль"/> 
                <StyledSigninButton type="submit" className="signin-button">Готово!</StyledSigninButton>
            </StyledSigninForm>
        </StyledSigninDivs>
    </StyledSigninDivs>
    }