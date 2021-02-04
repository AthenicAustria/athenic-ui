import React, { CSSProperties } from "react";
import { Avatar } from "../../Avatar";
import "./Comment.scss";

export interface CommentProps {
  author: string;
  text: string;
  likes?: number;
  dislikes?: number;
  onLike?: () => void;
  onDislike?: () => void;
  style?: CSSProperties;
  className?: string;
}

const Comment = ({
  style,
  className,
  author,
  text,
  likes,
  dislikes,
  onLike,
  onDislike,
}: CommentProps) => {
  return (
    <div
      className={`comment ${className ? className : ""}`}
      style={style ? style : null}
    >
      <Avatar size="medium" />
      <div className="comment__wrapper">
        <div className="comment__wrapper__author">{author}</div>
        <div className="comment__wrapper__text">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
