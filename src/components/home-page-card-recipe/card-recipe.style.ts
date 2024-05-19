import styled from "@emotion/styled";

export const Wrapper = styled.article`
    background: var(--color-back-card);
    border-radius: 15px;
    width: 268px;
    height: 222px;
    margin: auto;
    margin-bottom: 60px;
    box-shadow: -1px -1px 4px 0 rgba(0, 0, 0, 0.25), 1px 1px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    .img-recipe {
        border-radius: 15px;
        width: 100%;
        height: calc(100% - 45px);
        margin-bottom: 5px;
    }
    .for-name-recipe {
        padding: 0px 8px 5px 8px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .name-recipe {
        font-family: var(--main-font);
        font-style: italic;
        font-weight: 900;
        font-size: 14px;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: var(--color-text-main);
        text-align: left;
    }
    @media screen and (max-width: 960px) {
        width: 240px;
        height: 210px;
        margin-bottom: 25px;
        .name-recipe {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 540px) {
        width: 42vw;
        height: 42vw;
        margin-bottom: 15px;

        .img-recipe {
            width: 100%;
            height: auto;
        }

        .name-recipe {
            font-size: 3.2vw;
            text-align: center;
        }
    }
`;
