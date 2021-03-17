import React, { CSSProperties } from "react";
import "./MenuDivider.scss";

export interface MenuDividerProps {
  className?: string;
  style?: CSSProperties;
}

const MenuDivider: React.FC<MenuDividerProps> = ({
  className = "",
  style = {},
}: MenuDividerProps) => {
  return <li className={`menu-divider ${className}`} style={style}></li>;
};

export default MenuDivider;
