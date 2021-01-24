import React, { useRef, useEffect, CSSProperties } from "react";
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
  style: CSSProperties;
}

const Spinner = ({ variant, size, speed, style }: SpinnerProps) => {
  return (
    <div
      className={`spinner ${variant ? variant : ""} ${size ? size : ""}`}
      data-speed={`${speed ? `${speed}s` : "0.885s"}`}
      style={
        style
          ? { ...style, animationDuration: `${speed}s` }
          : { animationDuration: `${speed}s` }
      }
    >
      <div></div>
    </div>
  );
};

export default Spinner;
