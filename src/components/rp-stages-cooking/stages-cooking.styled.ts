import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const StyledStagesCooking = styled.ol`
    padding: 0 66px 66px 66px;
    font-family: var(--main-font);
    font-size: 20px;
    font-weight: regular;
    
    @media (max-width:768px) {
    font-size: 0.98em;
    }


    @media (max-width:480px) {
        padding: 0 5vw 5vw 5vw;
        font-size: 3vw;

    }
    
`;
