import styled from "@emotion/styled"
import { RootColors } from "../../assets/colors/root-colors";

export const StyledTag = styled.p`
    ${RootColors};
    color: var(--color-text-main);
    display: inline-block; 
    margin-right: 10px; 
    font-size: 20px;
    font-weight: regular;

    @media (max-width:768px) {
    font-size: 3vw;
    }

    @media (max-width:480px) {
    font-size: 3vw;
    }
`; 

