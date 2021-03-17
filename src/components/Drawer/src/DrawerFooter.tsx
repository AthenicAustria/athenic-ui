import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import "./DrawerFooter.scss";

export interface DrawerFooterProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({
  className = "",
  style = {},
  children,
}: DrawerFooterProps) => {
  return (
    <div className={`drawer-footer ${className}`} style={style}>
      {children ? children : null}
    </div>
  );
};

export default DrawerFooter;
