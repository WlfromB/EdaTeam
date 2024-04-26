import React from 'react';


import 'HTML/css/bootstrap-reboot.min.css';
import 'HTML/css/UserPage.css';
import 'HTML/css/mediaUserPage.css';

import { Header } from '../components/header';
import { UserPageMain } from '../components/UserPage-Main';
const UserPage = () => {
  return (
    <>
    <Header/>    
    <UserPageMain/>     
</>

  );
};

export default UserPage;

