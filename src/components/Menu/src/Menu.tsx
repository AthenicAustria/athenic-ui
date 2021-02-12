import React, { CSSProperties, ReactElement } from "react";
import "./Menu.scss";
import MenuItem, { MenuItemProps } from "./MenuItem";

export interface MenuProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactElement<MenuItemProps> | Array<ReactElement<MenuItemProps>>;
}

const Menu = ({ className = "", style = {}, children }: MenuProps) => {
  return (
    <div className={`menu ${className}`} style={style}>
      {children ? <ul className={`menu__menu`}>{children}</ul> : null}
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;
