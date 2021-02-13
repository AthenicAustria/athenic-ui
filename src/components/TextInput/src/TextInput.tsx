import React, { CSSProperties } from "react";
import "./TextInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { TextInputType } from "../types/TextInput";

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
  type?: TextInputType;
  /* eslint-disable no-unused-vars*/
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
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
  type,
  onChange,
}: TextInputProps) => {
  return (
    <div className="text-input">
      {label ? (
        <label className="text-input__label" htmlFor={name && name}>
          {label}
        </label>
      ) : null}
      <input
        id={name ? name : null}
        name={name ? name : null}
        form={form && form}
        type={type ? type : "text"}
        placeholder={placeholder && placeholder}
        disabled={disabled}
        value={value && value}
        className={`text-input__input ${disabled ? "disabled" : ""} ${
          invalid ? "invalid" : ""
        } ${className ? className : ""}`}
        style={style ? style : {}}
        onChange={onChange && onChange}
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
