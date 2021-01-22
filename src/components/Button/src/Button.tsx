import React, { CSSProperties } from "react";

export interface ButtonProps {
  text?: string;
  style?: CSSProperties;
  className?: string;
}

const Button = ({ text, style, className }: ButtonProps) => {
  return (
    <button style={style && style} className={className && className}>
      {text && text}
    </button>
  );
};

export default Button;
