import React, { CSSProperties, ReactChild } from "react";
import "./H1.scss";

interface H1Props {
  children?: ReactChild;
  style?: CSSProperties;
}

const H1 = ({ children, style }: H1Props) => {
  return (
    <h1 className="h1" style={style && style}>
      {children && children}
    </h1>
  );
};

export default H1;
