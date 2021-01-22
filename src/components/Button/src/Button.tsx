import React, { CSSProperties, ReactChildren } from "react";
import { ButtonSize } from "../types/ButtonTypes";
import "./Button.scss";

export interface ButtonProps {
  text: string | ReactChildren;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  children?: ReactChildren;
}

const Button = ({ text, style, className, size, children }: ButtonProps) => {
  return (
    <button
      style={style ? style : {}}
      className={`button ${size ? size : ""} ${className ? className : ""}`}
    >
      {text ? text : children ? children : ""}
    </button>
  );
};

export default Button;
