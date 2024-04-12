import React from 'react';

import './hp_reset.css';
import './hp_style.css';
import './hp_media.css';

import { logo } from '../assets/'
import { ico_filters } from '../assets/'
import { SearchIcon } from '../assets/'

import { logo_img } from '../assets/'
import { logo_tg } from '../assets/'
import { person } from '../assets/'

import { pancakes_meat } from '../assets/'
import { borsch } from '../assets/'
import { canned_soup } from '../assets/'
import { cheesecakes } from '../assets/'
import { cutlets } from '../assets/'
import { draniki } from '../assets/'
import { goulash } from '../assets/'
import { meringue } from '../assets/'
import { pancakes_cherries } from '../assets/'
import { rice_porridge } from '../assets/'
import { salad } from '../assets/'
import { vareniki } from '../assets/'


const HomePage = () => {
    return (
        <>
            <header className="header">
                <a href="#" className="link-logo">
                    <img className="img-logo" src={logo} alt="Логотип. Надпись ГотовимЛегко Оп! И готово!" />
                </a>
                <a href="#filters" className="link-filters">
                    <img className="img-filters" src={ico_filters} alt="Иконка для открытия фильтров" />
                </a>
                <a href="#my" className="link-person">
                    <img className="img-person" src={person} alt="Иконка человечка для перехода на свой профиль" />
                </a>
                <a href="#" className="login-registration">Войти</a>
            </header>

            <main>

                <div className="main-part">
                    <div className="filters">
                        <div className="search-bar">
                            <img src={SearchIcon} alt="Иконка лупы" className="search-icon" />
                            <input type="search" className="search-field" />
                        </div>
                        <label className="input-label">
                            <span className="input-title">Добавить ингредиент:</span>
                            <input type="text" className="input-ingredient" />
                        </label>
                        <label className="input-label">
                            <span className="input-title">Исключить ингредиент:</span>
                            <input type="text" className="input-ingredient" />
                        </label>
                        <label className="input-label">
                            <select className="select-category">
                                <option value="">- Выберите категорию -</option>
                                <option value="breakfast">Завтраки</option>
                                <option value="lunches">Обеды</option>
                                <option value="dinners">Ужины</option>
                                <option value="soups">Супы</option>
                                <option value="main-dishes">Гарниры</option>
                                <option value="meat">Мясо</option>
                                <option value="fish">Рыба</option>
                                <option value="salads">Салаты</option>
                                <option value="pastries-&-desserts">Выпечка и десерты</option>
                            </select>
                        </label>
                        <label className="input-label">
                            <span className="input-title">Цена:</span>
                            <div className="price-range">
                                <div className="price">
                                    <p className="text-price">от</p>
                                    <input type="number" className="input-price" />
                                </div>
                                <div className="price">
                                    <p className="text-price">до</p>
                                    <input type="number" className="input-price" />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="recipes">
                        <article className="one-recipe">
                            <img className="img-recipe" src={pancakes_meat}
                                alt="Фотография блинчиков с мясом, сыром и луком" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Блинчики с мясом, сыром и лучком</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={cheesecakes} alt="Фотография сырников из творога" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Сырники из творога</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={borsch} alt="Фотография борща" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Борщ</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={vareniki} alt="Фотография вареников" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Ленивые вареники</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={rice_porridge} alt="Фотография рисовой каши" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Рисовая каша</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={cutlets} alt="Фотография котлет по-киевски" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Котлеты по-киевски</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={draniki} alt="Фотография драников" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Драники</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={meringue} alt="Фотография безе" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Безе</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={goulash} alt="Фотография гуляша" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Гуляш</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={pancakes_cherries}
                                alt="Фотография блинчиков с вишней и творожным сыром" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Блинчики с вишней и творожным сыром</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={canned_soup} alt="Фотография супа из рыбных консервов" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Суп из рыбных консервов</a>
                            </div>
                        </article>
                        <article className="one-recipe">
                            <img className="img-recipe" src={salad} alt="Фотография салата" />
                            <div className="for-name-recipe">
                                <a className="name-recipe" href="#">Салат "Весенний"</a>
                            </div>
                        </article>
                    </div>
                </div>
                <nav className="nav-pages">
                    <ul>
                        <li className="page-item"><span className="page-link-arrow">⬅</span></li>
                        <li className="page-item"><span className="current-page">1</span></li>
                        <li className="page-item"><a className="page-link" href="#2">2</a></li>
                        <li className="page-item"><a className="page-link" href="#3">3</a></li>
                        <li className="page-item"><a className="page-link" href="#4">4</a></li>
                        <li className="page-item"><a className="page-link" href="#5">5</a></li>
                        <li className="page-item"><a className="page-link-arrow" href="#2">⮕</a></li>
                    </ul>
                </nav>
            </main>
            <footer>
                <div className="all-links-tg">
                    <a href="#Al" className="link-tg">
                        <img className="logo-tg" src={logo_tg} alt="Логотип телеграма" />
                        <span className="link-tg-text">Саша</span>
                    </a>
                    <a href="#Na" className="link-tg">
                        <img className="logo-tg" src={logo_tg} alt="Логотип телеграма" />
                        <span className="link-tg-text">Надя</span>
                    </a>
                    <a href="#Ad" className="link-tg">
                        <img className="logo-tg" src={logo_tg} alt="Логотип телеграма" />
                        <span className="link-tg-text">Аделина</span>
                    </a>
                </div>
                <a href="#">
                    <img className="logo-footer" src={logo_img} alt="Логотип сайта" />
                </a>
            </footer>
        </>
    );
};

export default HomePage;

