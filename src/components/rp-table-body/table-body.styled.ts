import styled from "@emotion/styled"
import { css } from '@emotion/react'
import { RootColors } from "../../assets/colors/root-colors";

export const StyledTableBRowData = styled.td`
    ${RootColors};
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: regular;

    border: 1px solid var(--color-border-cells); /*  граница для ячеек */
    padding: 8px; /*отступ внутри ячеек*/    

    @media (max-width:768px) {
        font-size: 0.9em;
    }

    @media (max-width:480px) {
        font-size: 2.5vw;
    }

`;
