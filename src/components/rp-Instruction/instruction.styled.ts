import styled from "@emotion/styled"
import { RootColors } from "../../assets/colors/root-colors";

export const StyledInstruction = styled.div`
    ${RootColors};
    border: 1px solid var(--color-text-main);
    width: 670px;
    height: 618px;
    color:var(--color-text-main);
    margin: 65px auto 0px;
    
    @media (max-width:768px) {
        height: 85vw;
        width: 85vw;
        margin: 5vw auto 0vw;

    }

    @media (max-width:480px) {
        height: 90vw;
        width: 90vw;
    }
    
`;
