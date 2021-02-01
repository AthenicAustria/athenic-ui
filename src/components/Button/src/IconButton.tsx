import React, { CSSProperties } from "react";
import { ButtonSize, ButtonIconType } from "../types/ButtonTypes";
import "./IconButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IconButtonProps {
  icon: ButtonIconType;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
}

const IconButton = ({ icon, style, className, size }: IconButtonProps) => {
  return (
    <button
      className={`icon_button ${className ? className : ""} ${
        size ? size : null
      }`}
      style={style ? style : null}
    >
      <FontAwesomeIcon className="icon_button__content" icon={icon} />
    </button>
  );
};

export default IconButton;
