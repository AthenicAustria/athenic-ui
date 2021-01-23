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
  iconBefore?: string;
  iconAfter?: string;
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
  iconBefore,
  iconAfter,
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
      {iconBefore ? (
        <img
          src={iconBefore}
          alt="Athenic Button Icon"
          className="button__icon"
          style={{ marginRight: "8px" }}
        />
      ) : null}
      <span
        className="button__content"
        style={
          iconBefore
            ? { paddingLeft: 0 }
            : iconAfter
            ? { paddingRight: 0 }
            : null
        }
      >
        {text ? text : children ? children : ""}
      </span>
      {iconAfter ? (
        <img
          src={iconAfter}
          alt="Athenic Button Icon"
          className="button__icon"
          style={{ marginLeft: "8px" }}
        />
      ) : null}
    </button>
  );
};

export default Button;
