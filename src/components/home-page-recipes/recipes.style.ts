import styled from "@emotion/styled";

export const StyledRecipes = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 35px;
    width: calc(100% - 261px);
    gap: 20px;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 100%;
        margin-left: 0px;
    }

    @media screen and (max-width: 540px) {
            width: 100%;
            margin-left: 0px;
    }
`;