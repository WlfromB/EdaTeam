import styled from "@emotion/styled"

import { RootColors } from "../../assets/colors/root-colors";

export const StyledTagName = styled.a`
    ${RootColors};
    color: var(--color-text-main);
    display: inline-block; /* Чтобы теги были в строку */
    margin-right: 10px; /*Добавляем немного отступов между тегами*/
    font-size: 20px;
    font-weight: regular;
    
    @media (max-width:768px) {
        font-size: 3vw;

    }


    @media (max-width:480px) {
        font-size: 3vw;

    }
`;
