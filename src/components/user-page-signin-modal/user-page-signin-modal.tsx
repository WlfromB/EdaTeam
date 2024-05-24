import React from "react";
import { 
    StyledSigninButton,
    StyledSigninDivs, 
    StyledSigninForm,
    StyledSigninHeader,
    StyledSigninInput,
    StyledSigninSpan 
} from "./user-page-signin-modal.styled";
import { URLs } from "../../__data__/urls";

export const UserPageSigninModal = ({ onClose, onSubmit }) => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.toString();
        const login = e.target.login.value.toString();
        const password = e.target.password.value.toString();

        const userData = { email, login, password };
        console.log(email)
        console.log(login)
        console.log(password)
        try {
            const response = await fetch(`${URLs.api.main}/auth/sign-up`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            console.log('1')
            const result = await response.json();
            console.log('2')
            if (response.ok) {
                console.log('User signed up successfully:', result);
                onSubmit(result.data); 
            }
             else {

                console.error('Sign-up error:', result.error);
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
            alert(`Error: ${error.message}`);
        }
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
                        id="signin-email"
                        name="email"
                        className="signin-input-block"
                        placeholder="Email пользователя"
                        required
                    />
                    <StyledSigninInput
                        type="text"
                        id="signin-login"
                        name="login"
                        className="signin-input-block"
                        placeholder="Имя пользователя"
                        required
                    />
                    <StyledSigninInput
                        type="password"
                        id="signin-password"
                        name="password"
                        className="signin-input-block"
                        placeholder="Пароль"
                        required
                    />
                    <StyledSigninButton type="submit" className="signin-button">
                        Готово!
                    </StyledSigninButton>
                </StyledSigninForm>
            </StyledSigninDivs>
        </StyledSigninDivs>
    );
};
