import React  from "react";

import { StyledLoginSpan ,
         StyledLoginDivs , 
         StyledLoginHeader ,
         StyledLoginForm, 
         StyledLoginInput,
         StyledLoginButton
} from "./user-page-login-modal.styled";
import { Link } from "../link";
import { URLs } from "../../__data__/urls";

export const UserPageLoginModal = ({ onClose, onSubmit, onRegisterClick }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.username.value.toString();
    const password = e.target.password.value.toString();

    const userData = { email, password };
    try{
      const response = await fetch(`${URLs.api.main}/auth/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const result = await response.json();
    if (response.ok) {
        // Handle successful sign-up
        console.log('User signed in successfully:', result);
        onSubmit(result.data); // Pass the result data to onSubmit
    }
      else {
        // Handle sign-up error
        console.error('Sign-up error:', result.error);
        alert(`Error: ${result.error}`);
    }
    }
    catch(error){
      console.error('Error during sign-up:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <StyledLoginDivs className="modal">
      <StyledLoginDivs className="modal-content">
        <StyledLoginSpan onClick={onClose}>&times;</StyledLoginSpan>
        <StyledLoginHeader>Вход в аккаунт</StyledLoginHeader>
        <StyledLoginForm onSubmit={handleFormSubmit}>
          <StyledLoginInput
            type="text"
            id="login-username"
            name="username"
            className="input-block"
            placeholder="Имя пользователя"
          />
          <StyledLoginInput
            type="password"
            id="login-password"
            name="password"
            className="input-block"
            placeholder="Пароль"
          />
          <StyledLoginButton type="submit" className="submit-button">
            Войти
          </StyledLoginButton>
          <Link ClassName="signin-link" onClick={(e) => {
            e.preventDefault();
            onRegisterClick();
          }}>
            Зарегистрироваться
          </Link>
        </StyledLoginForm>
      </StyledLoginDivs>
    </StyledLoginDivs>
  );
};