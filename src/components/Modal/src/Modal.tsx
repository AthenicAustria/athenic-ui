import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { H3 } from "../../H3";
import "./Modal.scss";

export interface ModalProps {
  shown: boolean;
  title?: string;
  closeButton?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Modal = ({
  shown,
  className,
  style,
  closeButton = true,
  title,
}: ModalProps) => {
  return (
    <>
      <div className={`modal-blur ${shown ? "shown" : "hidden"}`}></div>{" "}
      <div
        className={`modal ${className ? className : ""} ${
          shown ? "shown" : "hidden"
        }`}
        style={style ? style : null}
      >
        <div className={`modal__header`}>
          {title ? <H3 className={`modal__header__title`}>{title}</H3> : null}
          <FontAwesomeIcon
            icon={faTimes}
            className={`modal__header__close-icon`}
            onClick={() => {}}
          />
        </div>
        <div className={`modal__body`}>adsfadsf</div>
        <div className={`modal__footer`}></div>
      </div>
    </>
  );
};

export default Modal;
