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
`

export const StyledHeaderDishes = styled.h2`
    text-align: center;
    color: var(--color-text-main); 
    font-weight: 700;
    margin-top: -0.6rem;
`