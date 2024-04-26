import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const StyledLogoImage = styled.img`
    height: 306; /* Высота логотипа */
    max-width: 83;
    position: absolute;
    top: 12px;
    left: 18px;
    
/* адаптивная верстка */
@media (max-width:1000px) {
        height: 7vw;
}
    
@media (max-width:768px) {
        height: 6vw;
        top: 2vw;
}

@media (max-width:480px) {
        top: 1vw;
        height: 5vw;
}
    
`;
