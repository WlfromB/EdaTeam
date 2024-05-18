import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledDishes = styled.div`
    ${(props)=>{
        if(props.className == "dishes"){
            return css`
                justify-content: space-between;
                height: 17.5rem;
            `;
        }
    }}
    ${(props)=>{
        if(props.className == "orange-line"){
            return css`
                height: 0.15rem;
                background-color: var(--color-background-head-foot);
                margin: 1.5rem auto;
                width: 6.6rem; 

                @media screen and (max-width: ){
                    margin: -2.5rem 7.5rem 0 7.5rem;
                }
            `;
        }
    }}

    ${(props)=>{
        if(props.className == "obertka"){
            return css`
                display:flex;
                height: 2.2rem;
                //background-color: var(--color-background-head-foot);
                justify-content:center;
                
                border-radius:0.25rem;
                @media screen and (max-width: ){
                    margin: -2.5rem 7.5rem 0 7.5rem;
                }
            `;
        }
    }}
    ${(props)=>{
        if(props.className == "pagination"){
            return css`
                height: 2.2rem;
                background-color: var(--color-background-head-foot);
                margin: 0.5rem auto 0.25rem;
                max-width:12rem;
                padding: 0.25rem 1.5rem;                
                border-radius:0.4rem;
                display:flex;
                @media screen and (max-width: ){
                    margin: -2.5rem 7.5rem 0 7.5rem;
                }
            `;
        }
    }}
`

export const StyledHeaderDishes = styled.h2`
    text-align: center;
    color: var(--color-text-main); 
    font-weight: 700;
    margin-top: -0.6rem;
`

export const StyledButton = styled.button`
    flex: 1;
    padding: 0.35rem 1rem;
    background-color: var(--color-switch-button);
    border: none;
    color: var(--color-text-main);
    font-weight: 600;
    font-family:var(--main-font);
    font-size: 0.75rem;
    max-width:5rem;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
    &:disabled{
        background-color:var(--color-background-head-foot);
        cursor: not-allowed;
    }
    &:not(:disabled):hover {
    background-color: var(--color-switch-button-hover);
}
`