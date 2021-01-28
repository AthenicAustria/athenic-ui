import React, {
  AnchorHTMLAttributes,
  CSSProperties,
  HtmlHTMLAttributes,
} from "react";
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
    <div className="link">
      <a
        href={to}
        className={`link__link ${className}`}
        style={style ? style : null}
        target={target ? target : ""}
      >
        {text}
      </a>
    </div>
  );
};

export default Link;
