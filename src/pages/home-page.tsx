import React from 'react';

import './hp_style.css';

// import { Header } from '../components/Header';
import { HomePageMain } from '../components/home-page-main'

const HomePage = () => {
    return (
        <>
            {/* <Header /> */}
            <HomePageMain />
            {/* <footer>
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
            </footer> */}
        </>
    );
};

export default HomePage;

