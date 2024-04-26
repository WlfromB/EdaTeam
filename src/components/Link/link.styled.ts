import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledLink = styled.a<{
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
                margin-top: -0.4rem;
                font-weight: 700;
                font-size: 0.75rem;
                color: var(--color-text-main);
            `;
        }
    }}
`;