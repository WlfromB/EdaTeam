import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {Link as ConnectedLink} from 'react-router-dom';


export const StyledLink = styled(ConnectedLink)<{
    bottom?:boolean;
    className: string;
}>`
    display: block;
    text-decoration: none;
    color: var(--color-text-head-foot);
    font-weight: 700;
    font-size:${(props:any)=>!props.bottom ? "1.25rem" : "1.1rem"};
    text-align: left;
    line-height: 1.15;

    ${(props)=>{
        if(props.className == "text-login-sigin"){
            return css`
                display: block;
                text-decoration: none;
                font-weight: 700;
                font-size: 1.25rem;
                color: var(--color-text-head-foot);
            `;
        }
    }}

    ${(props)=>{
        if(props.className == "disha"){
            return css`
                display: block;
                text-decoration: none;
                margin-top: 0.2rem;
                font-weight: 700;
                font-size: 0.75rem;
                color: var(--color-text-main);
            `;
        }
    }}

    ${(props)=>{
        if(props.className == "add-recept-a"){
            return css`
                margin: auto;
                font-size: 1.25rem;
                text-decoration: none;
                text-align: center;
                color: var(--color-text-main);
                font-weight: 700;
            `;
        }
    }}
    ${(props)=>{
        if(props.className == "signin-link"){
            return css`
                margin: -1.5rem auto 0rem;
                color:var(--color-text-head-foot);
                font-size: 0.75rem;

                @media screen and (max-width: 768px){
                    margin: 0.4rem auto;
                }
            `;
        }
    }}
    
    ${(props)=>{
        if(props.className == "right-block-a"){
            return css`
                display: block;
                text-decoration: none;
                text-align: center;
                color: var(--color-text-main);
                font-weight: 700;
                
                visibility: collapse;
            `;
        }
    }}


    ${(props) =>{
        if(props.className == "name-recipe"){
            return css`
            font-family: var(--main-font);
        font-style: italic;
        font-weight: 900;
        font-size: 14px;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: var(--color-text-main);
        text-align: left;
        
        @media screen and (max-width:960px){
            font-size:16px
        }
        @media screen and (max-width:540px){
            font-size: 3.2vw;
            text-align: center;
        }
        `
        }
    }

    }
`;