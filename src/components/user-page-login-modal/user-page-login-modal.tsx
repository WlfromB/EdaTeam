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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    fetch(`${URLs.api.main}/userpage-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        onSubmit(data.user, data.token);
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error('Error:', error));
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