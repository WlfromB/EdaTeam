import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledLoginDivs = styled.div`
    ${(props)=>{
        if(props.className == "modal"){
            return css`
                display: block;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                backdrop-filter: blur(8px);
                background-color: rgba(0,0,0,0.4);
            `;
        }
    }};
    ${(props)=>{
        if(props.className == "modal-content"){
            return css`
                background-color: var(--color-background-head-foot);
                border-radius: 1rem;
                margin: 5% auto;
                padding: 3rem;
                border: 0.05rem solid #888;
                width: 36rem;
                height: 26rem;
                box-shadow: -1px -1px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25);  
                transition: transform 0.5s ease;

                @media screen and (max-width: 768px){
                    width: 23.7rem;
                    height: 18.5rem;
                }
            `;
        }
    }};
`

export const StyledLoginSpan = styled.span`
    color: #aaa;
    float: right;
    font-size: 2rem;
    font-weight: bold;
    margin:-1.5rem -1.5rem 0 0;

    &:hover,focus {
    color: black;
    text-decoration: none;
    cursor: pointer;}
`

export const StyledLoginHeader = styled.h2`
    text-align: center;
      margin: 0rem 5rem 2rem 5rem;
      padding:0.4rem 0rem;
      background-color: var(--color-enter-form);
      height: 2.5rem;
      border-radius: 0.5rem;
      font-family: var(--main-font);
      color:var(--color-text-main);
      font-weight: 500; 

      @media screen and (max-width: 768px){
        margin: 0 3.4rem 0.5rem 3.4rem;
        padding: 0.4rem 0.05rem;
        font-size: 1.5rem;
      }
`

export const StyledLoginForm = styled.form`
    display: block;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin:0rem 1rem;
`

export const StyledLoginInput = styled.input`
    margin:0rem 3rem 3rem 3rem;
    min-height: 2rem;
    border-radius: 0.6rem;
    border:none;
    padding: 0.5rem;
    background-color: var(--color-enter-form);

    @media screen and (max-width: 768px){
        margin: 0 1.4rem 1.5rem;
    }
`

export const StyledLoginButton = styled.button`
    min-height: 2rem;
    margin:0rem 7rem 3rem 7rem;
    border-radius: 0.6rem;
    border:none;
    padding: 0.5rem;
    background-color: var(--color-enter-form);
    font-size: 1.1rem;
    font-family: var(--main-font);
    color:var(--color-text-main);
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 0.9rem;
        font-weight: 600;
        border-radius: 0.4rem;
        padding: 0;
        margin: 0 3.2rem 0rem 3.2rem;
    }
`