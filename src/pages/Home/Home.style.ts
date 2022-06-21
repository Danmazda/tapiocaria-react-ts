import styled, { css } from "styled-components";
export const Home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    height: 100vh;
    width: 100vw;
  `}
`;

export const HomeContent = styled.section`
  ${({ theme }) => css`
    width: 90%;
    background-color: ${theme.colors.baseBg2};
    height: 94%;
    margin: 0 auto;
    margin-top: 1%;
  `}
`;
