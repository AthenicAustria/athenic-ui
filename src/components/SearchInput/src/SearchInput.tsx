import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import "./SearchInput.scss";

export interface SearchInput {
  style?: CSSProperties;
  className?: string;
  searchIcon?: boolean;
  label?: string;
  name?: string;
  form?: string;
  disabled?: boolean;
  validationMessage?: string;
  invalid?: boolean;
}

const SearchInput = ({
  style,
  className,
  searchIcon,
  label,
  name,
  form,
  disabled,
  validationMessage,
  invalid,
}: SearchInput) => {
  return (
    <div className="search-input">
      {label ? (
        <label className="text-input__label" htmlFor={name && name}>
          {label}
        </label>
      ) : null}
      <input
        disabled={disabled}
        id={name ? name : null}
        name={name ? name : null}
        form={form && form}
        type="text"
        className={`search-input__input ${className ? className : ""} ${
          invalid ? "invalid" : ""
        }`}
        style={style ? style : {}}
      />
      {validationMessage ? (
        <small className="text-input__validation-message">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{validationMessage}</span>
        </small>
      ) : null}
    </div>
  );
};

export default SearchInput;
