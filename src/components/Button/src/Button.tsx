import React, { CSSProperties, ReactChildren } from "react";
import { ButtonSize } from "../types/ButtonTypes";
import "./Button.scss";

export interface ButtonProps {
  text: string | ReactChildren;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  children?: ReactChildren;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onHover?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  style,
  className,
  size,
  children,
  onClick,
  onHover,
}: ButtonProps) => {
  return (
    <button
      style={style ? style : {}}
      className={`button ${size ? size : ""} ${className ? className : ""}`}
      onClick={onClick ? () => onClick : null}
      onMouseOver={onHover ? () => onHover : null}
    >
      {text ? text : children ? children : ""}
    </button>
  );
};

export default Button;
