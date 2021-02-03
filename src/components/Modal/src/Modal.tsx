import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { ModalPosition } from "../types/ModalTypes";
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
  position?: ModalPosition;
}

const Modal = ({
  shown,
  className,
  style,
  closeButton = true,
  title,
  onClose,
  children,
  position = "default",
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
        } ${
          position === "bottomLeft"
            ? "bottomLeft"
            : position === "bottomRight"
            ? "bottomRight"
            : ""
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
