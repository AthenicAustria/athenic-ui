import React, { CSSProperties } from "react";
import "./Badge.scss";
import { BadgeVariant, BadgeSolid } from "../types/BadgeTypes";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  solid?: BadgeSolid;
  style?: CSSProperties;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant,
  solid,
  className,
}: BadgeProps) => {
  return (
    <div
      className={`badge ${variant ? variant : ""} ${solid ? "solid" : ""} ${
        className ? className : ""
      }`}
    >
      <small className={`badge__content`}>{label}</small>
    </div>
  );
};

export default Badge;
