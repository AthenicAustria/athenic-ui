import React, { CSSProperties, useState } from "react";
import { Toaster } from "..";
import { ToastsType, ToastType } from "../types/ToasterTypes";
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
  const [toasts] = useState<ToastsType>(toastElements);

  const getToasts: () => ToastsType = () => toasts;

  return (
    <div
      className={`toast-manager ${className}`}
      style={style}
      {...Toaster.managerDataAttr}
    >
      {toastElements.map((e: ToastType, i: number) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
};

export default ToastManager;
