import React, { CSSProperties } from "react";
import "./RadioGroup.scss";

export interface RadioGroupProps {
  className?: string;
  style?: CSSProperties;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({ className, style, onChange }: RadioGroupProps) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default RadioGroup;
