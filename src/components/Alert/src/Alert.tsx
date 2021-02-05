import {
  faCheck,
  faExclamation,
  faExclamationTriangle,
  faInfo,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { AlertVariant } from "../types/AlertTypes";
import "./Alert.scss";

export interface AlertProps {
  title?: string;
  description?: string;
  icon?: boolean;
  variant: AlertVariant;
  closeIcon?: boolean;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
}

const Alert = ({
  className,
  style,
  title,
  description,
  icon = true,
  variant,
  closeIcon = false,
  onClose,
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
          {closeIcon ? (
            <FontAwesomeIcon
              className={`alert__title__close-icon ${variant}`}
              icon={faTimes}
              onClick={() => onClose && onClose()}
            />
          ) : null}
        </h3>
      ) : null}
      {description ? (
        <p
          className={`alert__description ${
            icon ? "with-icon" : "without-icon"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default Alert;
