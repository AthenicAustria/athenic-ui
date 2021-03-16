import {
  faExclamationTriangle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import "./PasswordInput.scss";

export interface PasswordInputProps {
  style?: CSSProperties;
  className?: string;
  label?: string;
  name?: string;
  form?: string;
  disabled?: boolean;
  validationMessage?: string;
  invalid?: boolean;
  value?: string;
  /* eslint-disable no-unused-vars*/
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const PasswordInput = ({
  style,
  className,
  label,
  name,
  form,
  disabled,
  validationMessage,
  invalid,
  value,
  onChange,
  onFocus,
  onBlur,
}: PasswordInputProps) => {
  return (
    <div className={`password-input`} style={style ? style : null}>
      {label ? (
        <label className="password-input__label" htmlFor={name && name}>
          {label}
        </label>
      ) : null}
      <div className="password-input__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        disabled={disabled}
        id={name ? name : null}
        name={name ? name : null}
        form={form && form}
        type="text"
        className={`password-input__input ${className ? className : ""} ${
          invalid ? "invalid" : ""
        } ${disabled ? "disabled" : ""}`}
        onChange={onChange && onChange}
        onFocus={(e: React.FormEvent<HTMLInputElement>) => {
          onFocus && onFocus(e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>) => {
          onBlur && onBlur();
        }}
        value={value && value}
      />
      {validationMessage ? (
        <small className="password-input__validation-message">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{validationMessage}</span>
        </small>
      ) : null}
    </div>
  );
};

export default PasswordInput;
