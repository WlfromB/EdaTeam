import React from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page';
import Recipe from './pages/recipe';
import UserPage from './pages/UserPage';
import { globalStyles } from './global.style';
import { PageRoutes } from './routes';
import ErrorBoundary from './components/error-boundary/error-boundary';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <PageRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;


