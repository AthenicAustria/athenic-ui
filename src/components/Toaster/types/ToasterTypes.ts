import { ReactElement } from "react";
import { ToastProps } from "../src/Toast";

export type ToastVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "info"
  | "warning"
  | "error";

export type ToastType = ReactElement<ToastProps>;
export type ToastsType = Array<ToastType>;
