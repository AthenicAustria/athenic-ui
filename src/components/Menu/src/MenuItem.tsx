import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { MenuItemVariant } from "../types/MenuTypes";
import "./MenuItem.scss";

export interface MenuItemProps {
  className?: string;
  style?: CSSProperties;
  icon?: IconDefinition;
  children: string;
  link?: string;
  variant?: MenuItemVariant;
  disabled?: boolean;
}

const MenuItem = ({
  className = "",
  style = {},
  icon,
  children,
  link,
  variant,
  disabled,
}: MenuItemProps) => {
  return (
    <li
      className={`menu-item ${className} ${variant ? variant : ""} ${
        disabled ? "disabled" : ""
      }`}
      style={style}
    >
      {link ? (
        <a className={`menu-item__link`} href={link}>
          {icon ? (
            <span
              className={`menu-item__icon ${variant ? variant : ""} ${
                disabled ? "disabled" : ""
              }`}
            >
              <FontAwesomeIcon icon={icon} />
            </span>
          ) : null}
          {children}
        </a>
      ) : icon ? (
        <>
          <span
            className={`menu-item__icon ${variant ? variant : ""} ${
              disabled ? "disabled" : ""
            }`}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
          {children}
        </>
      ) : (
        children
      )}
    </li>
  );
};

export default MenuItem;
