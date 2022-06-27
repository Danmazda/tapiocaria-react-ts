import styled, { css } from "styled-components";

export const Button = styled.button`${({theme})=>css`
      ${theme.mixins.buttonOutline()}

`}`