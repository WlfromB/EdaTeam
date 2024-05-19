import React from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

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

App.displayname = "App";

export default App;


