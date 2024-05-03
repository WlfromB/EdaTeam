import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.label`
    margin-bottom: 5px;
    
    .input-title {
        font-family: var(--main-font);
        font-size: 15px;
        color: var(--color-text-main);
        font-weight: 700;
    }

    .input-ingredient {
        margin-top: 8px;
        border-radius: 5px;
        border: none;
        outline-color: var(--color-text-main);
        width: 207px;
        height: 20px;
    }
`;