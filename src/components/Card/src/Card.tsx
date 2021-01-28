import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { H3 } from "../../H3";
import { CardSize } from "../types/CardTypes";
import "./Card.scss";

export interface CardProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactChildren | ReactChild;
  title?: string;
  size?: CardSize;
}

const Card = ({ style, className, children, title, size }: CardProps) => {
  return (
    <div
      className={`card ${className ? className : ""} ${size ? size : "medium"}`}
      style={style ? style : null}
    >
      {title ? <H3 className={`card__title`}>{title}</H3> : null}
      <div className={`card__content`}>{children}</div>
    </div>
  );
};

export default Card;
