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
}

const OTPInput = ({
  className,
  style,
  numInputs = 4,
  separator,
  label,
  validationMessage,
  value,
  onChange,
}: OTPInputProps) => {
  const [otp, setOtp] = useState(
    value ? value : [...Array(numInputs)].fill("")
  );

  const handleChange = (element: any, index: number) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
    element.nextSibling && element.nextSibling.focus();
  };

  return (
    <div
      className={`otp-input ${className ? className : ""}`}
      style={style ? style : null}
    >
      {label ? <label className="otp-input__label">{label}</label> : null}
      {[...Array(numInputs)].map((_: any, i: number, a: []) => {
        return (
          <>
            <input
              type="number"
              className={`otp-input__input otp-input-${i}`}
              maxLength={1}
              pattern="\d*"
              key={i}
              value={otp[i]}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                handleChange(e.target, i);
                onChange && onChange(e);
              }}
              onFocus={(e: React.FocusEvent<any>) => e.target.select()}
            />
            {i < a.length - 1 ? separator : null}
          </>
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
