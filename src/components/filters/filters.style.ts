import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
    box-sizing: border-box;
    border: 6px solid #ce5d1b;
    width: 261px;
    height: 400px;
    background: var(--color-back-card);
    padding: 35px 21.4px 0 21.4px;
    display: flex;
    flex-direction: column;

    .search-bar {
        background: white;
        border-radius: 5px;
        height: 29px;
        display: flex;
        align-items: center;
        margin: 0px 4px 20px 4px;
    }

    .search-icon {
        width: 24px;
        height: 24px;
        text-align: center;
    }

    .search-field {
        border: none;
        outline-color: var(--color-text-main);
    }

    .input-label {
        margin-bottom: 5px;
    }

    .input-title {
        font-family: var(--main-font);
        font-size: 15px;
        color: var(--color-text-main);
        font-weight: 700;

    }

    .select-category {
        font-family: var(--main-font);
        border-radius: 5px;
        border: none;
        color: var(--color-text-main);
        width: 207px;
        margin-top: 20px;
    }


    .price-range {
        display: flex;
        flex-direction: row;
    }
    
    @media screen and (max-width: 960px) {
        display: none;
    }
`;