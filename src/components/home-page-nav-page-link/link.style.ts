import styled from "@emotion/styled";

export const StyledLink = styled.a<{
  line?: boolean;
}>`
    font-family: var(--main-font);
    font-weight: 700;
    font-size: 20px;
    color: var(--color-text-main);
    text-decoration: ${props => (props.line ? "underline" : "none")};
    @media screen and (max-width: 960px) {
      font-size: 20px;
    }
    @media screen and (max-width: 540px) {
      font-size: 16px;
    }
`;
