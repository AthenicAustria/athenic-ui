import React, { CSSProperties, ReactElement } from "react";
import { PopoverPosition, PopoverSize } from "../types/PopoverTypes";
import "./Popover.scss";

export interface PopoverProps {
  children: ReactElement<any>;
  content?: ReactElement<any> | Array<ReactElement<any>>;
  className?: string;
  style?: CSSProperties;
  position?: PopoverPosition;
  size?: PopoverSize;
  shown?: boolean;
  onClose?: () => void;
}

const Popover: React.FC<PopoverProps> = ({
  className = "",
  style = {},
  position = "bottom",
  size = "medium",
  children,
  shown = false,
  content = null,
}: PopoverProps) => {
  return (
    <div className={`popover`}>
      <div
        className={`popover__pop ${className} ${position} ${
          shown ? "shown" : ""
        } ${size}`}
        style={style}
      >
        <div className={`popover__pop__content`}>{content}</div>
      </div>
      {children}
    </div>
  );
};

export default Popover;
