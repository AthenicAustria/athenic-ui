import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import "./H3.scss";

export interface H3Props {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  style?: CSSProperties;
  className?: string;
}

const H3 = ({ children, style, className }: H3Props) => {
  return (
    <h3 className={`h3 ${className ? className : ""}`} style={style && style}>
      {children && children}
    </h3>
  );
};

export default H3;
