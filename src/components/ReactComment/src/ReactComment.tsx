import React, { useRef, useEffect } from "react";

export interface ReactCommentProps {
  text: string;
  trim: boolean;
}

const ReactComment = ({ text, trim }: ReactCommentProps) => {
  const element = useRef(null);

  const createComment = () => {
    trim ? (text = text.trim()) : (): any => void 0;

    return `<!-- ${text} -->`;
  };

  useEffect(() => {
    element.current.outerHTML = createComment();
  }, []);

  return <div ref={element}></div>;
};

export default ReactComment;
