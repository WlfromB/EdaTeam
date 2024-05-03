import React from 'react';

import './reboot.css';
import './hp_style.css';

import { Header } from '../components/header';
import { HomePageMain } from '../components/home-page-main';
import { Footer } from '../components/footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <HomePageMain />
            <Footer />
        </>
    );
};

export default HomePage;

