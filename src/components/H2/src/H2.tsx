import React, { CSSProperties, ReactChild } from "react";
import "./H2.scss";

interface H1Props {
  children?: ReactChild;
  style?: CSSProperties;
}

const H2 = ({ children, style }: H1Props) => {
  return (
    <h2 className="h3" style={style && style}>
      {children && children}
    </h2>
  );
};

export default H2;
