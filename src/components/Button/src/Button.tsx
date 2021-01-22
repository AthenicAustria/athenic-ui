import React, { CSSProperties } from "react";
import { ButtonSize } from "../types/ButtonTypes";
import "./Button.scss";

export interface ButtonProps {
  text?: string;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
}

const Button = ({ text, style, className }: ButtonProps) => {
  return (
    <button style={style && style} className={className && className}>
      {text && text}
    </button>
  );
};

export default Button;
