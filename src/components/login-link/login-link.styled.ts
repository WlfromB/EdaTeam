import styled from "@emotion/styled"

export const StyledLoginLink = styled.span`
    color:var( --color-text-head-foot);
    position: absolute;
    text-decoration: none;
    top: 38px;
    right: 35px;
    font-family: var(--main-font);
    font-weight: 700;
    font-style: normal;
    font-size: 20px;

    @media (max-width:1000px) {
        font-size: 2vw;
        top: 4vw;
}
    

@media (max-width:768px) {

        font-size: 2vw;
        right: 3vw;
        top: 3vw;
}


@media (max-width:480px) {
        font-size: 2vw;
        top: 2vw;

}   
`;

export const StyledLogoEnter = styled.img`
    position: absolute;
    height: 30px;
    width: 30px;
    top: 35px;
    right: 118px;

    @media (max-width:1000px) {
        position: absolute;
        height: 3vw;
        width: 3vw;
        top: 3.5vw;
        right: 12vw;

}
    

@media (max-width:768px) {
        height: 2vw;
        width: 2vw;
        top: 3vw;
        right: 10vw;
}


@media (max-width:480px) {
        position: absolute;
        height: 2vw;
        width: 2vw;
        top: 2vw;
        right: 10vw;
}
`;
