import React, { CSSProperties, useState, useEffect } from "react";
import {
  RatingVariant,
  RatingSize,
  EmojiScale,
  EmojiType,
} from "../types/RatingTypes";
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
  const emojis: EmojiScale = [
    {
      emoji: "😞",
      value: 1,
    },

    {
      emoji: "😟",
      value: 2,
    },
    {
      emoji: "😐",
      value: 3,
    },
    {
      emoji: "🙂",
      value: 4,
    },
    {
      emoji: "😀",
      value: 5,
    },
  ];

  useEffect(() => {
    onRate ? onRate(rating) : null;
  }, [rating]);

  return (
    <div
      className={`rating ${className ? className : ""} ${size ? size : ""}`}
      style={style ? style : null}
    >
      {variant === "star" ? (
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
        <>
          {emojis.map((_: EmojiType, index: number) => {
            return (
              <span
                className={`rating__emoji ${index < rating ? "selected" : ""}`}
                key={index}
                onClick={(): void => {
                  setRating(index + 1);
                }}
              >
                {_.emoji}
              </span>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Rating;
