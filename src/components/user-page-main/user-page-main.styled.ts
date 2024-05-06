import styled from "@emotion/styled";
import { css } from "@emotion/react";

import {backgroundMain} from './index';

export const StyledMain = styled.main`
background-image: url({backgroundMain});
    font-family: var(--main-font);
`
export const StyledSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0rem 10rem;
    min-height: 40rem;
    padding-top: 5.6rem;

    @media screen and (max-width: 768px ){
        padding-top:0.5rem;
        margin: 2.4rem;
        min-height: 33rem;
    }
`