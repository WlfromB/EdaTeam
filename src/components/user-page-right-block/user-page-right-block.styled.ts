import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledRightBlock = styled.div`
    height: 32.8rem;
    background-color:    #FDD8C3;
    border-radius: 1rem;
    width: 22rem;
    margin: 0 0 0 9rem;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5), 0 0 1rem 0 rgba(0, 0, 0, 0.3), 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const StyledRightBlockImage = styled.img`
 ${(props)=>{
    if(props?.className == "image-profile")
        {
        return css`
            display: block;
            height: 45%; 
            width: 100%;
            border-radius: 1rem;
            margin-bottom: 2rem;
        `
    }
 }};
 ${(props)=>{
    if(props?.className == "image-favotites")
        {
        return css`
        display: block;
        height: 15%;
        width: 15%;
        margin: 0rem auto;
        `
    }
 }};
`

export const StyledRightBlockParagraph = styled.p`
    text-align: center;
    color: var(--color-text-main);
    font-weight: 700;
    margin: 1rem 0;
`