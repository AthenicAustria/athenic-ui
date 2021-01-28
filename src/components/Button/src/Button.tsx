import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { ButtonSize, ButtonVariant } from "../types/ButtonTypes";
import "./Button.scss";
export interface ButtonProps {
  text?: string | ReactChildren;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactChildren | ReactChild | string;
  iconBefore?: string | any;
  iconAfter?: string | any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onHover?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
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
  disabled,
}: ButtonProps) => {
  return (
    <button
      style={style ? style : null}
      className={`button ${size ? size : ""} ${className ? className : ""} ${
        variant ? variant : ""
      } ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      onMouseOver={onHover}
      disabled={disabled}
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
