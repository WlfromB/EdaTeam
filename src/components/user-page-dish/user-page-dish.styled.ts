import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledBlock = styled.div`
    ${(props)=>{
        if(props.className == "dish"){
            return css`
                margin: 0rem 3.85rem 1rem;
            `;
        }
    }}

    ${(props)=>{
        if(props.className == "orange-line-dish"){
            return css`
                height: 0.1rem;
                margin: 0.25rem 0rem 0.6rem;
                background-color: var(--color-background-head-foot);
            `;
        }
    }}
`

export const StyledParagraph = styled.p`
    display: inline-block;
    color: var(--color-text-main);
    font-weight: 700;
    font-size: 1rem;
`