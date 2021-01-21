import React, { ReactChild } from "react";
import "./H1.scss";

interface H1Props {
  children?: ReactChild;
}

const H1 = ({ children }: H1Props) => {
  return <h1 className="h1">{children && children}</h1>;
};

export default H1;
