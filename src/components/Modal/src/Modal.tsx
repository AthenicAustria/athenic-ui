import React, { CSSProperties } from "react";
import "./Modal.scss";

export interface ModalProps {
  shown: boolean;
  closeButton?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Modal = ({ shown, className, style, closeButton = true }: ModalProps) => {
  console.log(closeButton);
  return (
    <div
      className={`modal ${className ? className : ""} ${shown ? shown : ""}`}
      style={style ? style : null}
    >
      <div className={`modal__header`}></div>
      <div className={`modal__body`}></div>
      <div className={`modal__footer`}></div>
    </div>
  );
};

export default Modal;
