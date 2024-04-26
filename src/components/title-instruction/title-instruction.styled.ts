import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const StyledTitleInstruction = styled.p`
    font-family: var(--main-font);
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding: 025px;
    
    @media (max-width:768px) {
    font-size: 0.98em;
    }


    @media (max-width:480px) {
    font-size: 3vw;
    padding: 4vw;
    }
    
`;
