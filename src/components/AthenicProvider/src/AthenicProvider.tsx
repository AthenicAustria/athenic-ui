import React, { useEffect } from "react";
import { AthenicTheme } from "../types/AthenicProviderTypes";

export interface AthenicProviderProps {
  children?: any;
  theme?: AthenicTheme;
}

const AthenicProvider = ({ children, theme }: AthenicProviderProps) => {
  if (theme) {
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(
        `--${key.replace("_", "-")}`,
        `'${value}'`
      );
    }
  }
  useEffect(() => {
    //
  }, []);
  return <div className={`____athenic-ui`}>{children}</div>;
};

export default AthenicProvider;
