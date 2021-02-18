import React, { useEffect } from "react";
import { ReactComment } from "../../ReactComment";
import { AthenicTheme } from "../types/AthenicProviderTypes";

export const __athenicAscii: string = `
%                                                                               
%%%%                                                                         %%%
%%%%%%%%                                                                 %%%%%%%
%%%%%%%%%%%%                                                         %%%%%%%%%%%
%%%%%%%%%%%%                                                         %%%%%%%%%%%
%%%%%%%%%%%%                                                         %%%%%%%%%%%
%%%%%%%%%%%%                                             %           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%                         %%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%                  %%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
%%%%%%%%%%%%            %%%%%%%%%%%           %%%%%%%%%%%%           %%%%%%%%%%%
`;

export interface AthenicProviderProps {
  children?: any;
  theme?: AthenicTheme;
}

const AthenicProvider = ({ children, theme }: AthenicProviderProps) => {
  useEffect(() => {
    if (theme) {
      for (const [key, value] of Object.entries(theme)) {
        console.log(key, value);
        document.documentElement.style.setProperty(
          `--${key.replace("_", "-")}`,
          `${value}`
        );
      }
    }
  }, []);
  return (
    <>
      <ReactComment text={__athenicAscii} trim={false} />
      <div className={`${[...new Array(6)].join("_")}athenic-ui`}>
        {children}
      </div>
    </>
  );
};

export default AthenicProvider;
