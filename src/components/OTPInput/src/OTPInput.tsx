import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useState } from "react";
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
  onComplete?: () => void;
  placeholder?: string;
  summary?: boolean;
}

const OTPInput = ({
  className,
  style,
  numInputs = 4,
  label,
  validationMessage,
  value,
  onChange,
  onComplete,
  summary,
  placeholder,
}: OTPInputProps) => {
  const [otp, setOtp] = useState<Array<string>>(
    value ? value : [...Array(numInputs)].fill("")
  );

  const handleChange = (e: any, index: number) => {
    if (isNaN(e.target.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? e.target.value : d))]);

    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else {
      onComplete && onComplete();
      e.target.parentNode.children[0].select();
    }
  };

  return (
    <div
      className={`otp-input ${className ? className : ""}`}
      style={style ? style : null}
    >
      {label ? <label className="otp-input__label">{label}</label> : null}
      <div className={`otp-input__wrapper`}>
        {otp.map((_: any, i: number, a: []) => {
          return (
            <input
              type="number"
              className={`otp-input__wrapper__input otp-input-${i}`}
              maxLength={1}
              pattern="\d*"
              key={i}
              value={_}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                handleChange(e, i);
                onChange && onChange(e);
              }}
              onPaste={(e: any) => {
                console.log(e.target.value);
              }}
              onFocus={(e: React.FocusEvent<any>) => e.target.select()}
              placeholder={placeholder ? placeholder : null}
            />
          );
        })}
      </div>
      {summary ? (
        <div className={`otp-input__summary`}>{otp.join(" ")}</div>
      ) : null}
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
