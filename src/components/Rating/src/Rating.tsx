import React, { CSSProperties } from "react";
import { RatingVariant, RatingSize } from "../types/RatingTypes";
import "./Rating.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface RatingProps {
  variant?: RatingVariant;
  size?: RatingSize;
  className?: string;
  style?: CSSProperties;
}

const Rating = ({ variant, className, style, size }: RatingProps) => {
  variant = variant ? variant : "star";

  return (
    <div
      className={`rating ${className ? className : ""} ${size ? size : ""}`}
      style={style ? style : null}
    >
      {variant == "star" ? (
        <>
          {[...Array(5)].map((_: any, index: number) => {
            return (
              <span className={`rating__star`} key={index}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            );
          })}
        </>
      ) : (
        () => {
          return <div>asdf</div>;
        }
      )}
    </div>
  );
};

export default Rating;
