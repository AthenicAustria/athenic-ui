import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import "./DrawerHeader.scss";
import { H3 } from "../../H3";

export interface DrawerHeaderProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const DrawerHeader = ({
  className = "",
  style = {},
  title = "",
  children,
}: DrawerHeaderProps) => {
  return (
    <div className={`drawer-header ${className}`} style={style}>
      {title ? <H3>{title}</H3> : null}
      {children ? children : null}
    </div>
  );
};

export default DrawerHeader;
