import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { Avatar } from "../../Avatar";
import { CommentAuthor } from "../types/CommentTypes";
import "./Comment.scss";

export interface CommentProps {
  author: CommentAuthor;
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
      <Avatar
        size="medium"
        image={author.avatar ? author.avatar : null}
        link={author.link ? author.link : null}
      />
      <div className="comment__wrapper">
        <div className="comment__wrapper__author">{author.name}</div>
        <div className="comment__wrapper__text">{text}</div>
        <div className="comment__wrapper__actions">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="comment__wrapper__actions__like"
          />
          {likes ? (
            <span className="comment__wrapper__actions__like-count">
              {likes}
            </span>
          ) : null}
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="comment__wrapper__actions__like"
          />
          {dislikes ? (
            <span className="comment__wrapper__actions__like-count">
              {dislikes}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;
