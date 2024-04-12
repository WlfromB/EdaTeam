import React from 'react';
import './rp_reset.css';
import './rp_style.css';

import { logo } from '../assets/'
import { logo_img } from '../assets/'
import { logo_tg } from '../assets/'
import { person } from '../assets/'

const Recipe = () => {
  return (
    <>
    <header className="header">
            <a href="#"><img className="logo1" src={logo} alt="Логотип"/></a>
           
            <a href="#" className="link-enter"> 
                  <img className="logo-enter" src={person} alt="Картинка человечка"/> 
                  <span className="login_registration">Войти</span> 
            </a>               
           
    </header>

    <main className="content" >
        
        <h1 className="dish_name"> Блинчики с вишней и творожным сыром</h1>
        <iframe className="video_recipe" src="https://www.youtube.com/embed/EBbwrtTzTVQ" frameBorder="0" allowFullScreen></iframe>
        
        <div className="tags"> <p className="tag"> Теги:</p>
            
            <a href="#" className="tag-link">#блины</a>
            <a href="#" className="tag-link">#вишня</a>
            <a href="#" className="tag-link">#молоко</a>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Ингредиенты</th>
                    <th>Количество</th>
                    <th>Сбермаркет</th>
                    <th>Самокат</th>
                    <th>Озон Fresh</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ингредиент 1</td>
                    <td>500 гр</td>
                    <td>500р.</td>
                    <td>439р.</td>
                    <td>600р.</td>
                </tr>
                <tr>
                    <td>Ингредиент 2</td>
                    <td>2 шт</td>
                    <td>120р.</td>
                    <td>150р.</td>
                    <td>130р.</td>
                </tr>
                <tr>
                    <td>Ингредиент 3</td>
                    <td>500 гр</td>
                    <td>12р.</td>
                    <td>12.99р.</td>
                    <td>10р.</td>
                </tr>
                <tr>
                    <td>Ингредиент 4</td>
                    <td>500 гр</td>
                    <td>500р.</td>
                    <td>439р.</td>
                    <td>600р.</td>
                </tr>
                <tr>
                    <td>Ингредиент 5</td>
                    <td>500 гр</td>
                    <td>500р.</td>
                    <td>439р.</td>
                    <td>600р.</td>
                </tr>
                <tr>
                    <td>Ингредиент 6</td>
                    <td>500 гр</td>
                    <td>500р.</td>
                    <td>439р.</td>
                    <td>600р.</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={2}>Общая стоимость блюда</td>
                    
                    <td>1000р.</td>
                    <td>700р.</td>
                    <td>800р.</td>
                </tr>
            </tfoot>
        </table>

        <div className="instruction">
            <p className="instruc">Инструкция приготовления</p>
            <ol className="stages">
                <li>Смешать муку, молоко, яйца, сахар и соль в миске.</li>
                <li>Добавить вишню в тесто и перемешать.</li>
                <li>Вылить тесто на разогретую сковороду и обжарить с двух сторон до золотистого цвета.</li>
                <li>Подавать блинчики, украсив творожным сыром сверху.</li>
            </ol>
        </div>

    </main>

  
    <footer> 
        <div className="all-links-tg"> 
          <a href="#Al" className="link-tg"> 
            <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
            <span className="link-tg-text">Саша</span> 
          </a> 
          <a href="#Ad" className="link-tg"> 
            <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
            <span className="link-tg-text">Аделина</span> 
          </a> 
          <a href="#Na" className="link-tg"> 
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

export default Recipe;

