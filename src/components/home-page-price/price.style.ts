import styled from "@emotion/styled";

export const StyledPrice = styled.div`
    width: 90px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    background: white;
    padding-left: 5px;
    height: 20px;
    margin-right: 20px;
    
    .text-price {
        font-family: var(--main-font);
        font-size: 12px;
        color: var(--color-text-main);
        margin-right: 4px;
        margin-top: 3px;
    }

    .input-price {
        width: 70px;
        padding: 0;
        border-radius: 5px;
        border: none;
        outline-color: var(--color-text-main);
    }
`;