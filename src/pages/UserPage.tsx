import React from 'react';


import 'HTML/css/bootstrap-reboot.min.css';
import 'HTML/css/UserPage.css';
import 'HTML/css/mediaUserPage.css';

import { logo_tg, userpagelogo } from '../assets';
import { userIcon } from '../assets';
import { userHeart } from '../assets';
import { logo_img } from '../assets';

// import { scriptLogin } from '../assets';
// import { scriptSignin } from '../assets';
// import 'HTML/siginForm.js'; 
// import 'HTML/UserPage.js';
const UserPage = () => {
  return (
    <>
        <header>
        <img 
        src={userpagelogo}        
        alt="Логотип фирмы: вилка и нож"
        />
        <div className="slogan">
            <a className="text-slogan">
                ГотовимЛегко                
            </a>
            <a className="text-slogan bottom" >
                Оп! И готово!                
            </a>            
        </div>
        
        <div className="login-signin">
            <a className="text-login-sigin" href="#" id="loginLink">
                Вход
            </a>
        </div>        
    </header>
    <main>
        
        <section className="section-main">


            <div className="left-block">
                
                <div className="favorites-block">
                    <div className="dishes">
                    <h2>                        
                        История
                    </h2>
                    <div className="orange-line"></div>
                    <div className="dish">
                        <p>
                            Блюдо1
                        </p>
                        <a href="#">Ссылка</a>    
                        <div className="orange-line-dish"></div>
                    </div>
                    <div className="dish">
                        <p>
                            Блюдо2
                        </p>
                        <a href="#">Ссылка</a>    
                        <div className="orange-line-dish"></div>
                    </div>
                    <div className="dish">
                        <p>
                            Блюдо3
                        </p>
                        <a href="#">Ссылка</a>    
                        <div className="orange-line-dish"></div>
                    </div>
                    </div>
                </div>
                

                <div className="add-recept-block">
                    <a href="#">
                        Добавить рецепт
                    </a>
                </div>
            </div>
            

            <div className="right-block">
                <img src={userIcon} alt="Аватарка профиля" className="image-profile"/>
                <p>Логин пользователя</p>
                <p>Зарегистрирован с ...</p>
                <img src={userHeart} alt="Переключатель на избранное: сердечко" className="image-favotites"/>
                <a href="#">История</a>
            </div>


            <div id="loginModal" className="modal">                
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
            
            <div id="signinModal" className="signin-modal">
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
            
        </section>       
    </main>
    <footer> 
        <div className="all-links-tg"> 
          <a href="https://t.me/someoneswm" className="link-tg"> 
            <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
            <span className="link-tg-text">Саша</span> 
          </a> 
          <a href="https://t.me/AdelinaSattarova" className="link-tg"> 
            <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
            <span className="link-tg-text">Аделина</span> 
          </a> 
          <a href="https://t.me/nadenka_b" className="link-tg"> 
            <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
            <span className="link-tg-text">Надя</span> 
          </a> 
        </div> 
        <a href="#"> 
          <img className="logo-footer" src={logo_img} alt="Логотип сайта"/> 
        </a> 
      </footer>      

</>

  );
};

export default UserPage;

