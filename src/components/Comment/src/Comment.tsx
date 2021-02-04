import React, { CSSProperties } from "react";
import { Avatar } from "../../Avatar";
import "./Comment.scss";

export interface CommentProps {
  author: string;
  content: string;
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  style?: CSSProperties;
  className?: string;
}

const Comment = ({ style, className }: CommentProps) => {
  return (
    <div
      className={`comment ${className ? className : ""}`}
      style={style ? style : null}
    >
      <Avatar />
      <div className="comment__wrapper"></div>
    </div>
  );
};

export default Comment;
