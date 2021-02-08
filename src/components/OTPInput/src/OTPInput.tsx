import React, { CSSProperties, useState } from "react";
import "./OTPInput.scss";

export interface OTPInputProps {
  style?: CSSProperties;
  className?: string;
  numInputs?: number;
  separator?: any;
  label?: string;
}

const OTPInput = ({
  className,
  style,
  numInputs,
  separator,
  label,
}: OTPInputProps) => {
  const [otp, setOtp] = useState([...Array(numInputs)]);

  return (
    <div
      className={`otp-input ${className ? className : ""}`}
      style={style ? style : null}
    >
      {label ? <label className="otp-input__label">{label}</label> : null}
      {[...Array(numInputs)].map((_: any, i: number, a: []) => {
        return (
          <>
            <input type="number" className={`otp-input__input`} maxLength={1} />
            {i < a.length - 1 ? separator : null}
          </>
        );
      })}
      <div></div>
    </div>
  );
};

export default OTPInput;
