import React from 'react';


import './reboot.css';
import './user-page.css';
//import 'HTML/css/mediaUserPage.css';


import { Header } from '../components/header';
import { UserPageMain } from '../components/user-page-main';
import { Footer } from '../components/footer';

const UserPage = () => {
  return (
    <>
      <Header />
      <UserPageMain />
      <Footer />
    </>

  );
};

export default UserPage;

