import styled from "@emotion/styled"

import { RootColors } from "../../assets/colors/root-colors";

export const StyledDishName = styled.h1`
    ${RootColors};
    text-align: center;
    font-family: var(--main-font);
    font-size: 40px;
    font-weight: bold; /*bold=700)*/
    color: #711122;
    margin-bottom: 45px;
    
    @media (max-width: 1000px) {
        font-size: 4vw;
        margin-bottom: 4vw;
    }
    
    @media (max-width: 768px) {
        font-size: 4vw;
        margin-bottom: 4vw;
    }

    @media (max-width: 480px) {
        font-size: 4vw;
    }
`;
