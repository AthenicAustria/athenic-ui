import React, { CSSProperties } from "react";
import "./Badge.scss";
import { BadgeVariant, BadgeSolid } from "../types/BadgeTypes";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  solid?: BadgeSolid;
  style?: CSSProperties;
}

const Badge = ({ label, variant, solid }: BadgeProps) => {
  return (
    <div className={`badge ${variant ? variant : ""} ${solid ? "solid" : ""}`}>
      <small className={`badge__content`}>{label}</small>
    </div>
  );
};

export default Badge;
