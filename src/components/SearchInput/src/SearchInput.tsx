import {
  faExclamationTriangle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useState } from "react";
import "./SearchInput.scss";

export interface SearchInputProps {
  style?: CSSProperties;
  className?: string;
  label?: string;
  name?: string;
  form?: string;
  disabled?: boolean;
  validationMessage?: string;
  invalid?: boolean;
  /* eslint-disable no-unused-vars*/
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
}: SearchInputProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="search-input" style={style ? style : null}>
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
        } ${disabled ? "disabled" : ""} ${expanded ? "expanded" : ""}`}
        onChange={onChange && onChange}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            onSearch && onSearch();
          }
        }}
        onFocus={(e: React.FormEvent<HTMLInputElement>) => {
          expandOnFocus ? setExpanded(true) : null;
          onFocus && onFocus(e);
        }}
        onBlur={(e: React.FormEvent<HTMLInputElement>) => {
          expandOnFocus ? setExpanded(false) : null;
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
