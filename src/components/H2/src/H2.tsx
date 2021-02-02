import React, { CSSProperties, ReactChild } from "react";
import "./H2.scss";

export interface H2Props {
  children?: ReactChild;
  style?: CSSProperties;
  className?: string;
}

const H2 = ({ children, style, className }: H2Props) => {
  return (
    <h2 className={`h2 ${className ? className : ""}`} style={style && style}>
      {children && children}
    </h2>
  );
};

export default H2;
