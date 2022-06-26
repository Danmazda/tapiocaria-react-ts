import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

const activeBox = (theme: Theme) => css`
  content: "";
  position: absolute;
  background-color: transparent;
  height: 50px;
  right: 0;
  width: calc(100% - 15px);
  bottom: -50px;
  border-top-right-radius: 25px;
  box-shadow: 0 -25px 0 0 ${theme.colors.baseBg1};
  z-index: 0;
`;

export const Menu = styled.aside`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 20px 0;
    height: 100vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.baseBg1};
    border-radius: 16px 0 0 16px;
    box-sizing: border-box;
    padding: 1em;
    ${theme.mixins.lightBoxShadow}
  `}
`;

export const MenuLogo = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    text-transform: capitalize;
    padding: 0 0 20px 0;
    img {
      max-height: 80%;
      width: auto;
    }
  `}
`;
export const MenuButtonsContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
const MenuItemModifiers = {
  active: (theme: Theme) => css`
    background-color: ${theme.colors.baseBg1};
    &::before {
      ${activeBox(theme)};
      top: -50px;
      transform: scaleY(-1);
    }
    &::after {
      ${activeBox(theme)};
    }
  `,
};

export const MenuItem = styled.div`
  ${({ theme }) => css`
    height: 80px;
    width: calc(100% - 15px);
    border-radius: 16px 0 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    position: relative;
  `}
`;

export const MenuItemButton = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.buttonIcon()};
    z-index: 1;
  `}
`;

export const MenuItemLogout = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.buttonIcon()};
    z-index: 1;
  `}
`;
