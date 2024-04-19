import React  from "react";

import './style.css';

export const UserPageLoginModal = (props)=>{
    return <div id="loginModal" className="modal">                
    <div className="modal-content">        
        <span className="close">&times;</span>          
      <h2 className="header-modal">Вход в аккаунт</h2>                  
      <form className="login-form">
        <input type="text" id="login-username" name="username" className="input-block" placeholder="Имя пользователя"/>
        <input type="password" id="login-password" name="password" className="input-block" placeholder="Пароль"/>
        <button type="submit" className="submit-button" >Войти</button>
        <a href="#" id="signinLink" className="signin-link">Зарегистрироваться</a>
      </form>
    </div>
</div>
}