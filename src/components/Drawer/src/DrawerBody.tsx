import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import "./DrawerBody.scss";

export interface DrawerBodyProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const DrawerBody = ({
  className = "",
  style = {},
  children,
}: DrawerBodyProps) => {
  return (
    <div className={`drawer-body ${className}`} style={style}>
      {children ? children : null}
    </div>
  );
};

export default DrawerBody;
