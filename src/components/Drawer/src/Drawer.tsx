import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { DrawerPosition } from "../types/DrawerTypes";
import "./Drawer.scss";
import DrawerBody from "./DrawerBody";
import DrawerHeader from "./DrawerHeader";
import DrawerFooter from "./DrawerFooter";

export interface DrawerProps {
  className?: string;
  style?: CSSProperties;
  position?: DrawerPosition;
  shown?: boolean;
  onClose: () => void;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  closeOnExternalClick?: boolean;
}

//

const Drawer = ({
  className = "",
  style = {},
  position = "right",
  shown = false,
  onClose,
  children,
  closeOnExternalClick = true,
}: DrawerProps) => {
  return (
    <>
      <div
        className={`drawer-blur ${shown ? "shown" : ""}`}
        onClick={() => (closeOnExternalClick ? onClose() : void 0)}
      ></div>
      <div
        className={`drawer ${className} ${position} ${shown ? "shown" : ""}`}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

export default Drawer;
