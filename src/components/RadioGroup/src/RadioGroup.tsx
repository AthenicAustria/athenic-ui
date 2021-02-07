import React, { CSSProperties } from "react";
import { RadioGroupOptions, RadioGroupOption } from "../types/RadioGroupTypes";
import "./RadioGroup.scss";

export interface RadioGroupProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
  options: RadioGroupOptions;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  className,
  style,
  onChange,
  options,
  value,
}: RadioGroupProps) => {
  return (
    <div
      className={`radio-group ${className ? className : ""}`}
      style={style ? style : null}
    >
      {options.options.map((option: RadioGroupOption, index: number) => {
        return (
          <label
            htmlFor={option.id && option.id}
            form={options.form && options.form}
            className={`radio-group__label`}
          >
            <input
              form={options.form && options.form}
              type="radio"
              id={option.id && option.id}
              name={options.name && options.name}
              value={option.value}
              className={`radio-group__input`}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;
