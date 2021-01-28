import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import {
  ButtonIconType,
  ButtonSize,
  ButtonVariant,
} from "../types/ButtonTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.scss";

export interface ButtonProps {
  text?: string | ReactChildren;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactChildren | ReactChild | string;
  iconBefore?: ButtonIconType;
  iconAfter?: ButtonIconType;
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
      disabled={disabled && disabled}
    >
      {iconBefore ? (
        <FontAwesomeIcon className="button__icon-before" icon={iconBefore} />
      ) : null}
      <span
        className="button__content"
        style={
          iconBefore
            ? { paddingLeft: 6 }
            : iconAfter
            ? { paddingRight: 6 }
            : null
        }
      >
        {text ? text : children ? children : ""}
      </span>
      {iconAfter ? (
        <FontAwesomeIcon className="button__icon-after" icon={iconAfter} />
      ) : null}
    </button>
  );
};

export default Button;
