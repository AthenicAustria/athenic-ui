import React from "react";
import {
  SpinnerSize,
  SpinnerVariant,
  SpinnerSpeed,
} from "../types/SpinnerTypes";
import "./Spinner.scss";

export interface SpinnerProps {
  variant: SpinnerVariant;
  size: SpinnerSize;
  speed: SpinnerSpeed;
}

const Spinner = ({ variant, size, speed }: SpinnerProps) => {
  return (
    <div
      className={`spinner ${variant ? variant : ""} ${size ? size : ""}`}
      data-speed={`${speed ? `${speed}s` : "0.885s"}`}
    >
      <div></div>
    </div>
  );
};

export default Spinner;
