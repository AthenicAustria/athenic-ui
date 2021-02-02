import React, { CSSProperties, useState, useEffect } from "react";
import { RatingVariant, RatingSize } from "../types/RatingTypes";
import "./Rating.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface RatingProps {
  variant?: RatingVariant;
  size?: RatingSize;
  className?: string;
  style?: CSSProperties;
  initialRating?: number;
  onRate?: (value: number) => void;
}

const Rating = ({
  variant,
  className,
  style,
  size,
  initialRating,
  onRate,
}: RatingProps) => {
  variant = variant ? variant : "star";

  const [rating, setRating] = useState(initialRating || 0);

  useEffect(() => {
    onRate ? onRate(rating) : null;
  }, [setRating]);

  return (
    <div
      className={`rating ${className ? className : ""} ${size ? size : ""}`}
      style={style ? style : null}
    >
      {variant == "star" ? (
        <>
          {[...Array(5)].map((_: any, index: number) => {
            return (
              <span
                className={`rating__star ${index < rating ? "selected" : ""}`}
                key={index}
                onClick={(): void => {
                  setRating(index + 1);
                }}
              >
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
