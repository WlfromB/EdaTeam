import styled from "@emotion/styled"
import { css } from '@emotion/react'
import { RootColors } from "../../assets/colors/root-colors";

export const StyledHeader = styled.header`
    ${RootColors};
    color: var( --color-text-head-foot);
    height: 108px;
    max-width: 100%;
    margin-bottom: 61px;
    background: linear-gradient(180deg,var(--color-background-head-foot) 0%, #fffefd 100%);

@media (max-width:1000px) {
        height: 10vw;
        margin-bottom: 3vw;
}
    

@media (max-width:768px) {
        height: 10vw;
        margin-bottom: 3vw;
}


@media (max-width:480px) {
        height: 6vw;
}

    
`;
