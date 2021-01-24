import React from "react";
import "./TextInput.scss";

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  form?: string;
  value?: string;
  invalid?: boolean;
}

const TextInput = ({
  placeholder,
  disabled,
  form,
  value,
  invalid,
}: TextInputProps) => {
  return (
    <div className="text-input">
      <input
        form={form && form}
        type="text"
        placeholder={placeholder && placeholder}
        disabled={disabled}
        value={value && value}
        className={`text-input__input ${disabled ? "disabled" : ""} ${
          invalid ? "invalid" : ""
        }`}
      ></input>
    </div>
  );
};

export default TextInput;
