import React, { CSSProperties, useState } from "react";
import { Link } from "../../Link";
import { NavBarElement, NavBarElements } from "../../NavBar";
import "./BurgerMenu.scss";

export interface BurgerMenuProps {
  className?: string;
  style?: CSSProperties;
  elements?: NavBarElements;
}

const BurgerMenu = ({
  className = "",
  style = {},
  elements,
}: BurgerMenuProps) => {
  const [contentShown, setContentShown] = useState(false);

  return (
    <div className="burger">
      <div
        className={`burger-menu ${className}`}
        style={style}
        onClick={() => setContentShown((prev: boolean) => !prev)}
      >
        {[...new Array(3)].map((_: any, i: number) => {
          return <div className={`burger-menu__layer-${i + 1}`}></div>;
        })}
      </div>
      {elements ? (
        <ul
          className={`burger__content ${
            contentShown ? "burger__content__shown" : ""
          }`}
        >
          {elements.map((element: NavBarElement, index: number) => {
            return element.link ? (
              <li className={`burger__content__element`} key={index}>
                <Link
                  to={element.link}
                  text={element.label}
                  className={`burger__content__element__link`}
                  key={index}
                />
              </li>
            ) : (
              <li
                className={`burger__content__element non-link ${
                  element.disabled ? "disabled" : ""
                }`}
                key={index}
              >
                {element.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default BurgerMenu;
