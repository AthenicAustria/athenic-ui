import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import "./Switch.scss";

export interface SwitchProps {
  className?: string;
  style?: CSSProperties;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  form?: string;
  name?: string;
  id?: string;
  label?: string;
  validationMessage?: string;
  checked?: boolean;
}

const Switch = ({
  className,
  style,
  onChange,
  disabled,
  form,
  id,
  name,
  label,
  validationMessage,
  checked,
}: SwitchProps) => {
  return (
    <div
      className={`switch__wrapper ${className ? className : ""}`}
      style={style ? style : null}
    >
      {label ? (
        <label htmlFor={id && id} className={`switch__wrapper__label`}>
          {label}
        </label>
      ) : null}
      <div className={`switch`}>
        <input
          id={id && id}
          name={name && name}
          form={form && form}
          disabled={disabled}
          type="checkbox"
          className={`switch__input`}
          onChange={onChange && onChange}
          checked={checked && checked}
        />
        <div className={`switch__circle`}></div>
      </div>
      {validationMessage ? (
        <small className="switch__wrapper__validation-message">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{validationMessage}</span>
        </small>
      ) : null}
    </div>
  );
};

export default Switch;
