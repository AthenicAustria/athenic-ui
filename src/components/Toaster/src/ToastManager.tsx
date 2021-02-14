import React, { CSSProperties, useState } from "react";
import "./ToastManager.scss";

export interface ToastManagerProps {
  className?: string;
  style?: CSSProperties;
}

const ToastManager = ({ className = "", style = {} }: ToastManagerProps) => {
  const [toasts, setToasts] = useState([]);
  return (
    <div className={`toast-manager ${className}`} style={style}>
      <div></div>
    </div>
  );
};

export default ToastManager;
