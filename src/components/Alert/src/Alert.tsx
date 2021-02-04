import {
  faCheck,
  faExclamation,
  faExclamationTriangle,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { AlertVariant } from "../types/AlertTypes";
import "./Alert.scss";

export interface AlertProps {
  title?: string;
  icon?: boolean;
  variant: AlertVariant;
  className?: string;
  style?: CSSProperties;
}

const Alert = ({
  className,
  style,
  title,
  icon = true,
  variant,
}: AlertProps) => {
  return (
    <div
      className={`alert ${className ? className : ""} ${variant}`}
      style={style ? style : null}
    >
      {title ? (
        <h3 className={`alert__title`}>
          {icon ? (
            <FontAwesomeIcon
              className={`alert__title__icon ${variant}`}
              icon={
                variant === "success"
                  ? faCheck
                  : variant === "info"
                  ? faInfo
                  : variant === "warning"
                  ? faExclamationTriangle
                  : faExclamation
              }
            />
          ) : null}
          {title}
        </h3>
      ) : null}
    </div>
  );
};

export default Alert;
