import React, { CSSProperties } from "react";
import "./Step.scss";

export interface StepProps {
  className?: string;
  style?: CSSProperties;
}

const Step = ({ className, style }: StepProps) => {
  return (
    <div
      className={`stepper ${className ? className : ""}`}
      style={style ? style : null}
    >
      <div></div>
    </div>
  );
};

export default Step;
