import React, { CSSProperties, ReactElement } from "react";
import { StepProps } from "./Step";
import "./Stepper.scss";

export interface StepperProps {
  children: ReactElement<StepProps> | Array<ReactElement<StepProps>>;
  className?: React.Component;
  style?: CSSProperties;
}

const Stepper = ({ className, style, children }: StepperProps) => {
  return (
    <div
      className={`stepper ${className ? className : ""}`}
      style={style ? style : null}
    >
      {children}
      <div></div>
    </div>
  );
};

export default Stepper;
