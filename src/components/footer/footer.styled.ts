import styled from "@emotion/styled"
import { RootColors } from "../../assets/colors/root-colors";

export const StyledFooter = styled.footer`
    ${RootColors};
    width: 100%; 
    height: calc(108px - 15px); 
    padding: 15px; 
    /* background: linear-gradient(360deg, var(--color-background-head-foot) 0%, #fffefd 100%);  */
    background:var(--color-footer);
    align-items: flex-end; 
    display: flex; 
    justify-content: space-between; 
  

@media (max-width:768px) {
        height: 10vw;
}

@media (max-width:480px) {
        height: 6vw;
        /* padding: 0.5em;  */
}

`;
