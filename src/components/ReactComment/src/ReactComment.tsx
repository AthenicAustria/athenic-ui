import React, { useRef, useEffect, MutableRefObject } from "react";
export interface ReactCommentProps {
  text: string;
  trim: boolean;
}

const ReactComment: React.FC<ReactCommentProps> = ({
  text,
  trim,
}: ReactCommentProps) => {
  const element: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement | null>(
    null
  );

  const createComment: () => string = () => {
    trim ? (text = text.trim()) : (): any => void 0;

    return `<!-- ${text} -->`;
  };

  useEffect(() => {
    element.current.outerHTML = createComment();
  }, []);

  return <div ref={element}></div>;
};

export default ReactComment;
