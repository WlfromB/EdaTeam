import React from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page';
import Recipe from './pages/recipe';
import UserPage from './pages/UserPage';
import { globalStyles } from './global.style';
import { PageRoutes } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;


