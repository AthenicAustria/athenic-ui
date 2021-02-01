import React, { CSSProperties, useState, useEffect } from "react";
import { CollapsContentType, CollapseTab } from "../types/CollapseTypes";
import "./Collapse.scss";

export interface CollapseProps {
  content: CollapsContentType;
  initialActiveTabs?: number[];
  className?: string;
  style?: CSSProperties;
}

const Collapse = ({
  content,
  initialActiveTabs,
  className,
  style,
}: CollapseProps) => {
  const [collapseTabs, setCollapseTabs] = useState([]);
  // const [collapsed, setCollapsed] = useState(new Array(content.length - 1));

  const toggleCollapseTab = (e: any) => {
    console.log(e.target.nextElementSibling.className);
    if (e.target.nextElementSibling.className.includes("collapsed")) {
      e.target.nextElementSibling.className = e.target.nextElementSibling.className.replace(
        "collapsed",
        "opened"
      );
    } else if (e.target.nextElementSibling.className.includes("opened")) {
      console.log(e.target.nextElementSibling.className);
      e.target.nextElementSibling.className = e.target.nextElementSibling.className.replace(
        "opened",
        "collapsed"
      );
    }
  };

  useEffect(() => {
    let collapseTabsTemp: any = [];
    content.forEach((tab: CollapseTab, index: number) => {
      collapseTabsTemp.push(
        <div className={`collapse__tab`} key={index}>
          <div
            className={`collapse__tab__header`}
            onClick={(e) => toggleCollapseTab(e)}
          >
            {tab.header}
          </div>
          <div
            className={`collapse__tab__content ${
              initialActiveTabs?.includes(index) ? "opened" : "collapsed"
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
