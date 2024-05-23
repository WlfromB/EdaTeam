import React from "react";

//import './style.css';
import { StyledSigninButton,
        StyledSigninDivs, 
        StyledSigninForm,
        StyledSigninHeader,
        StyledSigninInput,
        StyledSigninSpan
} from "./user-page-signin-modal.styled";
export const UserPageSigninModal = ({ onClose, onSubmit }) => {
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
  
       
      // handle sign-up logic here (e.g., make an API request to sign up the user)
      const userData = { username, password }; // mock user data for demonstration
      onSubmit(userData);
    };
  
    return (
      <StyledSigninDivs id="signinModal" className="signin-modal">
        <StyledSigninDivs className="signin-modal-content">
          <StyledSigninSpan onClick={onClose} className="close-signin">
            &times;
          </StyledSigninSpan>
          <StyledSigninHeader className="signin-header-modal">
            Регистрация
          </StyledSigninHeader>
          <StyledSigninForm onSubmit={handleFormSubmit} className="signin-form">
          <StyledSigninInput
              type="email"
              id="signin-username"
              name="username"
              className="signin-input-block"
              placeholder="Email пользователя"
            />
          <StyledSigninInput
              type="text"
              id="signin-username"
              name="username"
              className="signin-input-block"
              placeholder="Имя пользователя"
            />
            <StyledSigninInput
              type="password"
              id="signin-password"
              name="password"
              className="signin-input-block"
              placeholder="Пароль"
            />
            
            <StyledSigninButton type="submit" className="signin-button">
              Готово!
            </StyledSigninButton>
          </StyledSigninForm>
        </StyledSigninDivs>
      </StyledSigninDivs>
    );
  };