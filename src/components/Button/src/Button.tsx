import React, { CSSProperties, ReactChildren } from "react";
import { ButtonSize, ButtonVariant } from "../types/ButtonTypes";
import "./Button.scss";
export interface ButtonProps {
  text: string | ReactChildren;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactChildren;
  icon?: string;
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
  icon,
}: ButtonProps) => {
  return (
    <button
      style={style ? style : null}
      className={`button ${size ? size : ""} ${className ? className : ""} ${
        variant ? variant : ""
      }`}
      onClick={onClick}
      onMouseOver={onHover}
    >
      {icon ? (
        <img
          src={icon}
          alt="Athenic Button Icon"
          className="button__icon"
          style={{ marginRight: "8px" }}
        />
      ) : null}
      <span
        className="button__content"
        style={icon ? { paddingLeft: 0 } : null}
      >
        {text ? text : children ? children : ""}
      </span>
    </button>
  );
};

export default Button;
