import React, { CSSProperties, ReactChildren } from "react";
import { ButtonSize, ButtonVariant } from "../types/ButtonTypes";
import "./Button.scss";

// const icon_placeholder = require("../../../assets/img/icon_placeholder.png");

export interface ButtonProps {
  text: string | ReactChildren;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactChildren;
  icon?: File;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onHover?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  style,
  className,
  size,
  variant,
  children,
  onClick,
  onHover,
}: ButtonProps) => {
  return (
    <button
      style={style ? style : {}}
      className={`button ${size ? size : ""} ${className ? className : ""} ${
        variant ? variant : ""
      }`}
      onClick={onClick}
      onMouseOver={onHover}
    >
      <span>{text ? text : children ? children : ""}</span>
    </button>
  );
};

export default Button;
