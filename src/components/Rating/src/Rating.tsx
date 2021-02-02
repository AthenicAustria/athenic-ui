import React, { CSSProperties } from "react";
import { RatingVariant } from "../types/RatingTypes";
import "./Rating.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export interface RatingProps {
  variant: RatingVariant;
  className?: string;
  style?: CSSProperties;
}

const Rating = ({ variant, className, style }: RatingProps) => {
  return (
    <div
      className={`rating ${className ? className : ""}`}
      style={style ? style : null}
    >
      {variant === "star"
        ? new Array(5).map((e: any, index: number) => {
            return <div className={`rating__star`}></div>;
          })
        : null}
    </div>
  );
};

export default Rating;
