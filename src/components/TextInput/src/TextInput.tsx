import React, { CSSProperties } from "react";
import "./TextInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  form?: string;
  value?: string;
  invalid?: boolean;
  name?: string;
  label?: string;
  validationMessage?: string;
  style?: CSSProperties;
  className?: string;
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
  style,
  className,
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
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{validationMessage}</span>
        </small>
      ) : null}
    </div>
  );
};

export default TextInput;
