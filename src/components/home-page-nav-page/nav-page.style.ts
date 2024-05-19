import styled from "@emotion/styled";

export const StyledNav = styled.nav`
    .nav-list {
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;
        justify-content: center;
        gap: 1em;
    }
    @media screen and (max-width: 960px) {
    .nav-list {
        margin-bottom: 6px;
    }}
    @media screen and (max-width: 540px) {
    .nav-list {
        margin-bottom: 6px;
    }}
    `;
