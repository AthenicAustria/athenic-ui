import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { DrawerPosition } from "../types/DrawerTypes";
import "./Drawer.scss";
import DrawerHeader from "./DrawerHeader";

export interface DrawerProps {
  className?: string;
  style?: CSSProperties;
  position?: DrawerPosition;
  shown?: boolean;
  onClose: () => void;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  closeOnExternalClick?: boolean;
}

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

export default Drawer;
