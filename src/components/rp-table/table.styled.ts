import styled from "@emotion/styled"
import { RootColors } from "../../assets/colors/root-colors";

export const StyledTable = styled.table`
    ${RootColors};
    margin: 30px auto 0;
    border-collapse: collapse; /* объединяем границы */
    width: 654px; /* задаем ширину таблицы */
    background-color: #FDDCC9; /*  фоновый цвет таблицы */
    color: var(--color-text-main);    

    @media (max-width:768px) {
        width: 80vw;
    }

    @media (max-width:480px) {
        margin: 3vw auto 0;
        width: 90vw;
    }   

`;
