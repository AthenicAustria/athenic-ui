import React, { CSSProperties, useState, useEffect } from "react";
import { CollapsContentType, CollapseTab } from "../types/CollapseTypes";
import "./Collapse.scss";

export interface CollapseProps {
  content: CollapsContentType;
  activeCollapseTab?: number;
  className?: string;
  style?: CSSProperties;
}

const Collapse = ({
  content,
  activeCollapseTab,
  className,
  style,
}: CollapseProps) => {
  const [collapseTabs, setCollapseTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(
    activeCollapseTab ? activeCollapseTab : null
  );

  const toggleCollapseTab = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  useEffect(() => {
    let collapseTabsTemp: any = [];
    content.forEach((tab: CollapseTab, index: number) => {
      collapseTabsTemp.push(
        <div
          className={`collapse__tab `}
          key={index}
          onClick={(e) => toggleCollapseTab(e)}
        >
          <div className={`collapse__tab__header`}>{tab.header}</div>
          <div
            className={`collapse__tab__content ${
              activeCollapseTab === index ? "open" : "collapsed"
            }`}
          >
            {tab.content}
          </div>
        </div>
      );
    });
    setCollapseTabs(collapseTabsTemp);
  }, []);

  console.log(collapseTabs);

  return (
    <div
      className={`collapse ${className ? className : ""}`}
      style={style ? style : null}
    >
      {collapseTabs}
    </div>
  );
};

export default Collapse;
