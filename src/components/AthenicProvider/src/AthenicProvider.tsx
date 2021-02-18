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
  asciiComment?: boolean;
}

const AthenicProvider = ({
  children,
  theme,
  asciiComment = true,
}: AthenicProviderProps) => {
  useEffect(() => {
    if (theme) {
      for (const [key, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(
          `--${key.replace("_", "-")}`,
          `${value}`
        );
      }
    }
  }, []);
  return (
    <>
      {asciiComment ? (
        <ReactComment text={__athenicAscii} trim={false} />
      ) : null}
      <div className={`${[...new Array(6)].join("_")}athenic-ui`}>
        {children}
      </div>
    </>
  );
};

export default AthenicProvider;
