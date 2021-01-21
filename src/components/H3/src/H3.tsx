import React, { CSSProperties, ReactChild } from "react";
import "./H3.scss";

interface H1Props {
  children?: ReactChild;
  style?: CSSProperties;
}

const H3 = ({ children, style }: H1Props) => {
  return (
    <h3 className="h3" style={style && style}>
      {children && children}
    </h3>
  );
};

export default H3;
