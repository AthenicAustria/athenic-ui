import { faAddressCard, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { AvatarSize } from "../types/AvatarTypes";
import "./Avatar.scss";

export interface AvatarProps {
  image?: string;
  className?: string;
  style?: CSSProperties;
  size?: AvatarSize;
  notifications?: number;
  link?: string;
  onClick?: () => void;
}

const Avatar = ({
  className,
  style,
  image,
  size = "medium",
  notifications,
  link,
  onClick,
}: AvatarProps) => {
  return (
    <a
      className={`avatar ${className ? className : ""} ${size}`}
      style={
        link
          ? style
            ? { cursor: "pointer", ...style }
            : { cursor: "pointer" }
          : style
          ? style
          : null
      }
      onClick={() => {
        onClick && onClick();
      }}
      href={link}
    >
      {image ? (
        <img
          src={image ? image : "https://via.placeholder.com/150x150?text=%20"}
          alt="Athenic UI - Avatar Image"
          className={`avatar__image`}
        />
      ) : (
        <span className="avatar__icon">
          <FontAwesomeIcon icon={faUser} />
          {notifications ? (
            <small className="avatar__icon__notifications">
              {notifications}
            </small>
          ) : null}
        </span>
      )}
    </a>
  );
};

export default Avatar;
