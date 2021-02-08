import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, HtmlHTMLAttributes, useState } from "react";
import "./OTPInput.scss";

export interface OTPInputProps {
  style?: CSSProperties;
  className?: string;
  numInputs?: number;
  separator?: any;
  label?: string;
  validationMessage?: string;
  value?: number[];
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const OTPInput = ({
  className,
  style,
  numInputs = 4,
  label,
  validationMessage,
  value,
  onChange,
}: OTPInputProps) => {
  const [otp, setOtp] = useState(
    value ? value : [...Array(numInputs)].fill("")
  );

  const handleChange = (e: any, index: number) => {
    if (isNaN(e.target.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? e.target.value : d))]);
    e.target.nextSibling
      ? e.target.nextSibling.focus()
      : e.target.parentNode.children[0].focus();
  };

  return (
    <div
      className={`otp-input ${className ? className : ""}`}
      style={style ? style : null}
    >
      {label ? <label className="otp-input__label">{label}</label> : null}
      {[...Array(numInputs)].map((_: any, i: number, a: []) => {
        return (
          <input
            type="number"
            className={`otp-input__input otp-input-${i}`}
            maxLength={1}
            pattern="\d*"
            key={i}
            value={otp[i]}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              handleChange(e, i);
              onChange && onChange(e);
            }}
            onFocus={(e: React.FocusEvent<any>) => e.target.select()}
          />
        );
      })}
      {validationMessage ? (
        <small className="text-input__validation-message">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{validationMessage}</span>
        </small>
      ) : null}
    </div>
  );
};

export default OTPInput;
