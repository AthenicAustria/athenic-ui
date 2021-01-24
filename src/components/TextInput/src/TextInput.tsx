import React from "react";
import "./TextInput.scss";

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  form?: string;
  value?: string;
  invalid?: boolean;
  name?: string;
  label?: string;
  validationMessage?: string;
}

const TextInput = ({
  placeholder,
  disabled,
  form,
  value,
  invalid,
  name,
  label,
  validationMessage,
}: TextInputProps) => {
  return (
    <div className="text-input">
      {label ? (
        <label className="text-input__label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        id={name ? name : null}
        name={name ? name : null}
        form={form && form}
        type="text"
        placeholder={placeholder && placeholder}
        disabled={disabled}
        value={value && value}
        className={`text-input__input ${disabled ? "disabled" : ""} ${
          invalid ? "invalid" : ""
        }`}
      ></input>
      {validationMessage ? (
        <small className="text-input__validation-message">
          {validationMessage}
        </small>
      ) : null}
      <i className="fas fa-exclamation-triangle"></i>
    </div>
  );
};

export default TextInput;
