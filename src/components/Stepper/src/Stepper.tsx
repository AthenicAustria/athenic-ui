import React, { CSSProperties } from "react";
import "./Stepper.scss";

export interface StepperProps {
  className?: string;
  style?: CSSProperties;
}

const Stepper = ({ className, style }: StepperProps) => {
  return (
    <div
      className={`stepper ${className ? className : ""}`}
      style={style ? style : null}
    >
      <div></div>
    </div>
  );
};

export default Stepper;
