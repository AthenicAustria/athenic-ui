import React, { CSSProperties, useState } from "react";
import { ToastsType } from "../types/ToasterTypes";
import "./ToastManager.scss";

export interface ToastManagerProps {
  className?: string;
  style?: CSSProperties;
  toastElements?: ToastsType;
}

const ToastManager = ({
  className = "",
  style = {},
  toastElements = [],
}: ToastManagerProps) => {
  const [toasts, setToasts] = useState<ToastsType>(toastElements);

  const getToasts: () => ToastsType = () => toasts;

  return (
    <div className={`toast-manager ${className}`} style={style}>
      <div></div>
    </div>
  );
};

export default ToastManager;
