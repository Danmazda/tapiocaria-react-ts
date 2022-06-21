import styled, { css } from "styled-components";
export const Header = styled.header`
  ${({ theme }) => css`
    background-color: red;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const HeaderLogo = styled.div`
  ${({ theme }) => css`
      color: ${theme.colors.textColor};

  `}
`;

export const HeaderNav = styled.ul`
  ${({ theme }) => css`
      list-style: none;
      li{
        color: aliceblue;
      }


  `}
`;

export const HeaderSearch = styled.div`
  ${({ theme }) => css`
     display: flex;
     justify-content: center;
     align-items: center;
  `}
`;




