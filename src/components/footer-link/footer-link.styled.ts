import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const StyledFooterTg = styled.img`
    width: 27px; 
    margin-right: 3px; 

/* адаптивная верстка */
@media (max-width:768px) {
        width: 0.8em; 

}

@media (max-width:480px) {

        width: 0.8em; 
}
`;

export const StyledFooterCaption = styled.span`
 
    font-family: var(--main-font); 
    font-weight: bold; 
    font-size: 12px; 
    color: var(--color-text-head-foot); 
    display: flex; 
    justify-content: center; 
    align-items: center; 

/* адаптивная верстка */
@media (max-width:1000px) {
        font-family: var(--main-font); 
        font-weight: bold; 
        font-size: 12px; 
        color: var(--color-text-head-foot); 
        display: flex; 
        justify-content: center; 
        align-items: center; 
}    

@media (max-width:768px) {  
        font-size: 0.8em; 
}

@media (max-width:480px) {
        font-size: 0.4em; 
}

`;

export const StyledFooterLink = styled.a`

    text-decoration: none; 
    display: flex; 
    margin-right: 23px; 

@media (max-width:768px) {
        margin-right: 0.7em; 
}

@media (max-width:480px) {
        margin-right: 0.5em; 
}

`;
