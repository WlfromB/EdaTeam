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
`