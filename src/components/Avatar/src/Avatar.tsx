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
}

const Avatar = ({
  className,
  style,
  image,
  size = "medium",
  notifications,
}: AvatarProps) => {
  return (
    <div
      className={`avatar ${className ? className : ""} ${size}`}
      style={style ? style : null}
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
            <small className="avatar__icon__notifications">{notifications}</small>
          ) : null}
        </span>
      )}
    </div>
  );
};

export default Avatar;
