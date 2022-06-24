import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.header`
  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const HeaderLogo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    ${theme.mixins.logoStyle}
    img {
    }
  `}
`;

export const HeaderNav = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    li {
      color: aliceblue;
    }
  `}
`;

export const HeaderNavLink = styled(Link)`
  ${({ theme }) => css`
    font-family: "Roboto";
    text-decoration: none;
    color: black;
    :hover {
      font-weight: 900;
    }
  `}
`;

export const HeaderSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.baseBg1};
    padding: 0.3em;
    border-radius: 5px;
    gap: 6px;
    ${theme.mixins.lightBoxShadow}
    input {
      ${theme.mixins.input()}
    }
  `}
`;
