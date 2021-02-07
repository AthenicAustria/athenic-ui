import React, { CSSProperties } from "react";
import "./Switch.scss";

export interface SwitchProps {
  className?: string;
  onChange?: () => void;
}

const Switch = ({ className, onChange }: SwitchProps) => {
  return (
    <div className={`switch ${className ? className : ""}`}>
      <input
        type="checkbox"
        className={`switch__input`}
        onChange={onChange && onChange}
      />
      <div className={`switch__circle`}></div>
    </div>
  );
};

export default Switch;
