import React, { CSSProperties, ReactElement } from "react";
import "./Menu.scss";
import MenuDivider from "./MenuDivider";
import MenuItem, { MenuItemProps } from "./MenuItem";

export interface MenuProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactElement<MenuItemProps> | Array<ReactElement<MenuItemProps>>;
}

const Menu: React.FC<MenuProps> = ({
  className = "",
  style = {},
  children,
}: MenuProps) => {
  return (
    <div className={`menu ${className}`} style={style}>
      {children ? <ul className={`menu__menu`}>{children}</ul> : null}
    </div>
  );
};

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export default Menu;
