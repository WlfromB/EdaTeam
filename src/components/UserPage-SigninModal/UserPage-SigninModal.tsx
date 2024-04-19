import React from "react";
import './style.css';
export const UserPageSigninModal = (props)=>
    {
        return <div id="signinModal" className="signin-modal">
        <div className="signin-modal-content">
            <span  className = "close-signin">&times; </span>
            <h2 className="signin-header-modal">Регистрация</h2>
            <form className="signin-form">
                <input type="text" id="sigin-username" name="username" className="signin-input-block" placeholder="Имя пользователя"/>
                <input type="password" id="sigin-password" name="password" className="signin-input-block" placeholder="Пароль"/> 
                <input type="password" id="an-sign-password" name="password" className="signin-input-block" placeholder="Повторите пароль"/> 
                <button type="submit" className="signin-button">Готово!</button>
            </form>
        </div>
    </div>
    }