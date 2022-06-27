import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    height: 70vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 1em;
    gap: 2em;
    justify-content: space-around;
    border-radius: 0.4em;
    ${theme.mixins.lightBoxShadow}
  `}
`;

export const BoxForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2em;
    justify-content: space-around;
    align-items: stretch;
    width: 100%;
    input {
      ${theme.mixins.input(`${theme.colors.baseBg2}`)}
    }
    
  `}
`;

export const BoxLogo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    font-family: ${theme.constants.logoFontFamily};
  `}
`;
