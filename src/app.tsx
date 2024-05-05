import React from 'react';
import { Global } from '@emotion/react';


import HomePage from './pages/home-page';
import Recipe from './pages/recipe';
import UserPage from './pages/UserPage';
import { globalStyles } from './global.style';

const App = () => {
  return (
    <>
    <Global styles={globalStyles}/>
    <UserPage />
    </>
  );
};

export default App;


