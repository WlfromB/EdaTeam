import styled from "@emotion/styled"
import { RootColors } from "../../assets/colors/root-colors";

export const StyledTableHeadRow = styled.th`
    ${RootColors};
    font-family:var(--main-font);
    font-size: 20px;
    font-weight: bold; 
    border: 1px solid var(--color-border-cells); /*  граница для ячеек */
    padding: 8px; /*отступ внутри ячеек*/
    text-align: left;
    padding: 8px;

    @media (max-width:768px) {
    font-size: 0.93em;

    }

    @media (max-width:480px) {
    font-size: 2.5vw;
    }
    
`;

export const StyledTableHead = styled.thead`
    text-align: left;
    padding: 8px;

`;


