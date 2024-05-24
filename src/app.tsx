import React, { useEffect, useState } from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter} from 'react-router-dom';


import { globalStyles } from './global.style';
import { PageRoutes } from './routes';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { Header } from './components/header';
import { UserPageLoginModal } from './components/user-page-login-modal';
import { UserPageSigninModal } from './components/user-page-signin-modal';
import { URLs } from './__data__/urls';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [user, setUser] = useState('');
  
  useEffect(() => {
    const userData = localStorage.getItem('token');
    if(userData){
    setIsAuthenticated(true);
    setUser(userData.toString());}
    
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSigninClick = () => {
    setShowSigninModal(true);
    setShowLoginModal(false);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseSigninModal = () => {
    setShowSigninModal(false);
  };

  const handleLoginSubmit = (userData, token) => {
    //.setItem('token', token);
    localStorage.setItem('token', userData);

    setIsAuthenticated(true);
    setUser(userData);
    setShowLoginModal(false);
  };

  const handleSigninSubmit = (userData) => {
    // handle sign-up logic here
    setShowSigninModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          onLoginClick={handleLoginClick}
          onLogout={handleLogout}
        />
        <PageRoutes />
        {showLoginModal && (
          <UserPageLoginModal
            onClose={handleCloseLoginModal}
            onSubmit={handleLoginSubmit}
            onRegisterClick={handleSigninClick}
          />
        )}
        {showSigninModal && (
          <UserPageSigninModal
            onClose={handleCloseSigninModal}
            onSubmit={handleSigninSubmit}
          />
        )}
      </BrowserRouter>
    </ErrorBoundary>
  );
};

App.displayname = "App";

export default App;


