import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledLeftBlockes = styled.div`
    ${(props)=>{
        if(props.className == "left-block"){
            return css`
                width: 34.25rem;

                @media screen and (max-width: 768px){
                    width: 21.6rem;
                    height: 10rem;
                    margin: 0 auto
                }
            `;
        }
    }}
    ${(props)=>{
        if(props.className == "favorites-block"){
            return css`
                box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5), 0 0 1rem 0 rgba(0, 0, 0, 0.3), 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
                background-color: #FDD8C3;
                height: 23.35rem;
                border-radius: 1rem;
                padding-top: 2.4rem;
            `;
        }
    }}
    
    ${(props)=>{
        if(props.className == "add-recept-block"){
            return css`
                display: flex;    
                box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5), 0 0 1rem 0 rgba(0, 0, 0, 0.3), 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
                background-color: #FDD8C3;
                border-radius: 1rem;
                height: 5.8rem;
                margin-top: 3.5rem;
                justify-content: center;

                @media screen and (max-width: 768px ){
                    margin-top: 2rem;
                }
            `;
        }
    }}
`