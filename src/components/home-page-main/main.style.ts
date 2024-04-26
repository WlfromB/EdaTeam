import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    .main-part {
        display: flex;
        flex-direction: row;
        padding: 59px 35px 0px 35px;
    }
    @media screen and (max-width: 960px) {
        .main-part {
            padding: 0px 18px 0px 18px;
        }
    }
    @media screen and (max-width: 540px) {
        .main-part {
            padding: 0px 10px 0px 10px;
        }
    }
`;