import {css } from '@emotion/react';
import styled from '@emotion/styled';
import {backgroundErrorBoundary2 } from '.';

export const DivError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    text-align: center;
    background-color:white;
    margin:auto;
    box-shadow: -1px -1px 4px 0 rgba(0, 0, 0, 0.25), 1px 1px 4px 0 rgba(0, 0, 0, 0.25);
    padding:5vw;
    border-radius: 2vh;
    z-index:1;
    ${(props)=>{
        if(props?.className == "back"){
            return css`
                display:flex;
                width: 100vw;
                height: 100vh;
                box-shadow:none;
                z-index:-1;
                background-image:url(${backgroundErrorBoundary2});
                background-size: cover;
                background-repeat: no-repeat;
            `;
        }
    }}
`

export const HeaderError = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;

`

export const ParagraphError = styled.p`
    font-size: 1rem;
    margin-top: 0;
`

export const ImageBackgroundError = styled.img``