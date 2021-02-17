import React, { useEffect } from "react";

export interface AthenicProviderProps {
  children?: any;
}

const AthenicProvider = ({ children }: AthenicProviderProps) => {
  useEffect(() => {}, []);
  return <div className={`____athenic-ui`}>{children}</div>;
};

export default AthenicProvider;
