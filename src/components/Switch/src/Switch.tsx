import React, { CSSProperties } from "react";
import "./Switch.scss";

export interface SwitchProps {
  style?: CSSProperties;
  className?: string;
}

const Switch = ({ style, className }: SwitchProps) => {
  return (
    <div className={`switch ${className ? className : null}`}>
      <div></div>
    </div>
  );
};

export default Switch;
