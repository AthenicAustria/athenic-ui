import React, { CSSProperties } from "react";
import "./Link.scss";

export interface LinkProps {
  text: string;
  to: string;
  target?: string;
  className?: string;
  style?: CSSProperties;
}

const Link = ({ to, text, target, className, style }: LinkProps) => {
  return (
    <a
      href={to}
      className={`link ${className}`}
      style={style ? style : null}
      target={target ? target : ""}
    >
      {text}
    </a>
  );
};

export default Link;
