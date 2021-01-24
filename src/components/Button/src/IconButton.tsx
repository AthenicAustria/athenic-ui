import React, { CSSProperties } from "react";
import { ButtonSize } from "../types/ButtonTypes";
import "./IconButton.scss";

export interface IconButtonProps {
  icon: string;
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
      style={style ? style : {}}
    >
      <img
        className="icon_button__content"
        src={icon}
        alt="Athenic Icon Button Icon"
      />
    </button>
  );
};

export default IconButton;
