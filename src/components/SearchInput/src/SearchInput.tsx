import {
  faExclamationTriangle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useState } from "react";
import "./SearchInput.scss";

export interface SearchInput {
  style?: CSSProperties;
  className?: string;
  label?: string;
  name?: string;
  form?: string;
  disabled?: boolean;
  validationMessage?: string;
  invalid?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  expandOnFocus?: boolean;
}

const SearchInput = ({
  style,
  className,
  label,
  name,
  form,
  disabled,
  validationMessage,
  invalid,
  onChange,
  onFocus,
  onSearch,
  expandOnFocus = false,
}: SearchInput) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="search-input">
      {label ? (
        <label className="search-input__label" htmlFor={name && name}>
          {label}
        </label>
      ) : null}
      <div className="search-input__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        disabled={disabled}
        id={name ? name : null}
        name={name ? name : null}
        form={form && form}
        type="text"
        className={`search-input__input ${className ? className : ""} ${
          invalid ? "invalid" : ""
        } ${disabled ? "disabled" : ""}`}
        style={style ? style : {}}
        onChange={onChange && onChange}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            onSearch && onSearch();
          }
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>) => {
          onFocus && onFocus(e);
        }}
      />
      {validationMessage ? (
        <small className="search-input__validation-message">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{validationMessage}</span>
        </small>
      ) : null}
    </div>
  );
};

export default SearchInput;
