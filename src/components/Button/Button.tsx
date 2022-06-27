import { ButtonHTMLAttributes } from 'react';
import * as S from "./Button.style";
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonProps = {
  value: string
} & ButtonType;
export const Button = ({ value, ...props }: ButtonProps) => {
  return <S.Button {...props}>{value}</S.Button>;
};
