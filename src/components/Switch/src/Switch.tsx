import React, { CSSProperties } from "react";
import "./Switch.scss";

export interface SwitchProps {
  style?: CSSProperties;
  className?: string;
}

const Switch = ({ style, className }: SwitchProps) => {
  return (
    <div className={`switch ${className ? className : ""}`}>
      <input type="checkbox" className={`switch__input`} />
      <div className={`switch__circle`}></div>
    </div>
  );
};

export default Switch;
