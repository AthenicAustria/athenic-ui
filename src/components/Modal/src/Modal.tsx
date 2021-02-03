import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { H3 } from "../../H3";
import "./Modal.scss";

export interface ModalProps {
  shown: boolean;
  title?: string;
  closeButton?: boolean;
  className?: string;
  style?: CSSProperties;
  onClose: () => void;
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const Modal = ({
  shown,
  className,
  style,
  closeButton = true,
  title,
  onClose,
  children,
}: ModalProps) => {
  return (
    <>
      <div
        className={`modal-blur ${shown ? "shown" : "hidden"}`}
        onClick={() => onClose()}
      ></div>
      <div
        className={`modal ${className ? className : ""} ${
          shown ? "shown" : "hidden"
        }`}
        style={style ? style : null}
      >
        <div className={`modal__header`}>
          {title ? <H3 className={`modal__header__title`}>{title}</H3> : null}
          {closeButton ? (
            <FontAwesomeIcon
              icon={faTimes}
              className={`modal__header__close-icon`}
              onClick={() => onClose()}
            />
          ) : null}
        </div>
        <div className={`modal__body`}>{children && children}</div>
        <div className={`modal__footer`}></div>
      </div>
    </>
  );
};

export default Modal;
