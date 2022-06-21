import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";
import down from "../assets/icons/down.svg";

const logoStyle = () => css`
  font-family: ${constants.logoFontFamily};
  font-size: ${constants.logoFontSize};
  line-height: ${constants.logoLineHeight};
`;

const headingStyle = () => css`
  font-family: ${constants.headingFontFamily};
  font-size: ${constants.headingFontSize};
  line-height: ${constants.headingLineHeight};
`;

const bodyStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  font-size: ${constants.bodyFontSize};
  line-height: ${constants.bodyLineHeight};
`;

const overlay = () => css`
  background: rgb(0, 0, 0, 0.6);
`;

const buttonOutlineModifiers = {
  circle: () => css`
    border-radius: 999px;
  `,
};

const buttonOutline = (color = colors.primaryColor, circle = false) => css`
  background: rgb(249, 156, 62);
  background: linear-gradient(
    180deg,
    rgba(249, 156, 62, 1) 0%,
    rgba(237, 123, 11, 1) 100%
  );
  border: none;
  border-radius: 3px;
  color: white;
  padding: 1em 1.5em;
  color: ${color};
  ${circle && buttonOutlineModifiers.circle()}
`;

const buttonFilled = (color = colors.primaryColor) => css`
  background: ${color};
  border: none;
  border-radius: 8px;
  color: ${colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  cursor: pointer;
  ${bodyStyle()};
  font-weight: 600;
  box-shadow: 0px 8px 24px 0px ${colors.shadowColor};
`;

const buttonIconModifiers = {
  active: () => css`
    box-shadow: 0px 8px 24px 0px ${colors.shadowColor};
  `,
};

const buttonIcon = (active = false) => css`
  height: 56px;
  width: 56px;
  border-radius: 8px;
  padding: 16px;
  border: none;
  cursor: pointer;
  background-color: ${active ? colors.primaryColor : "transparent"};
  color: ${active ? colors.textColor : colors.primaryColor};
  ${active && buttonIconModifiers.active()}
`;

const buttonToggle = (active = false) => css`
  border-radius: 8px;
  padding: 7px 12px;
  border: ${active ? "none" : "1px solid " + colors.baseLine};
  height: 35px;
  cursor: pointer;
  background-color: ${active ? colors.primaryColor : "transparent"};
  color: ${active ? colors.textColor : colors.primaryColor};
`;

const input = () => css`
  border-radius: 8px;
  padding: 3px;
  background: ${colors.baseBg1};
  border: none;
  box-sizing: border-box;
`;

const select = (important = true) => css`
  ${input()};
  ${bodyStyle()};
  appearance: none;
  background: ${important ? colors.secondaryColor : "transparent"};
  border: ${important ? "none" : "1px solid " + colors.baseLine};
  color: ${colors.textColor};
  background-image: url(${down});
  background-repeat: no-repeat;
  padding-right: 50px;
  background-position: 85%;
`;

export const mixins = {
  bodyStyle,
  buttonFilled,
  buttonIcon,
  buttonOutline,
  buttonToggle,
  headingStyle,
  input,
  logoStyle,
  overlay,
  select,
};
