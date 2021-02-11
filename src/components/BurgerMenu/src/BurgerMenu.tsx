import React, { CSSProperties } from "react";
import "./BurgerMenu.scss";

export interface BurgerMenuProps {
  className?: string;
  style?: CSSProperties;
}

const BurgerMenu = ({ className = "", style = {} }: BurgerMenuProps) => {
  return (
    <div className={`burger-menu ${className}`} style={style}>
      {[...new Array(3)].map((_: any, i: number) => {
        return <div className={`burger-menu__layer-${i + 1}`}></div>;
      })}
    </div>
  );
};

export default BurgerMenu;
