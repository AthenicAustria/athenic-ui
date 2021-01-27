import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { H3 } from "../../H3";
import "./Card.scss";

export interface CardProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactChildren | ReactChild;
  title?: string;
}

const Card = ({ style, className, children, title }: CardProps) => {
  return (
    <div
      className={`card ${className ? className : ""}`}
      style={style ? style : null}
    >
      {title ? <H3 className={`card__title`}>{title}</H3> : null}
      <div className={`card__content`}>{children}</div>
    </div>
  );
};

export default Card;
