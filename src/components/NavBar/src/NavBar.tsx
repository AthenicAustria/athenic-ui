import React, { CSSProperties, ReactChild, ReactChildren } from "react";
import { BurgerMenu } from "../../BurgerMenu";
import { Link } from "../../Link";
import {
  NavBarElement,
  NavBarElements,
  NavBarLogo,
} from "../types/NavBarTypes";
import "./NavBar.scss";

export interface NavBarProps {
  className?: string;
  style?: CSSProperties;
  elements?: NavBarElements;
  logo?: NavBarLogo;
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const NavBar = ({
  className,
  style,
  elements = [],
  logo,
  children,
}: NavBarProps) => {
  return (
    <nav
      className={`nav-bar ${className ? className : ""}`}
      style={style ? style : null}
    >
      {logo ? (
        <img
          src={logo.logo}
          alt="Athenic UI NavBar logo"
          className={`nav-bar__logo`}
          onClick={() => {
            logo.onClick && logo.onClick();
            logo.link ? (window.location.href = logo.link) : null;
          }}
          style={logo.link || logo.onClick ? { cursor: "pointer" } : null}
        />
      ) : null}
      <ul className={`nav-bar__content`}>
        {elements.map((element: NavBarElement, index: number) => {
          return element.link ? (
            <li className={`nav-bar__content__element`} key={index}>
              <Link
                to={element.link}
                text={element.label}
                className={`nav-bar__content__element__link`}
                key={index}
              />
            </li>
          ) : (
            <li
              className={`nav-bar__content__element non-link ${
                element.disabled ? "disabled" : ""
              }`}
              key={index}
            >
              {element.label}
            </li>
          );
        })}
      </ul>

      {children && children}
      <BurgerMenu />
    </nav>
  );
};

export default NavBar;
