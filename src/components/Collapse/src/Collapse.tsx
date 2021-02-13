import React, { CSSProperties, useState, useEffect } from "react";
import { CollapsContentType, CollapseTab } from "../types/CollapseTypes";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  const [collapseTabs, setCollapseTabs] = useState<Array<JSX.Element>>([]);

  const toggleCollapseTab = (e: any) => {
    if (e.target.nextElementSibling.className.includes("collapsed")) {
      e.target.nextElementSibling.className = e.target.nextElementSibling.className.replace(
        "collapsed",
        "opened"
      );
      e.target.children[0].children[0].className = e.target.children[0].children[0].className.replace(
        "collapsed",
        "opened"
      );
    } else if (e.target.nextElementSibling.className.includes("opened")) {
      e.target.nextElementSibling.className = e.target.nextElementSibling.className.replace(
        "opened",
        "collapsed"
      );
      e.target.children[0].children[0].className = e.target.children[0].children[0].className.replace(
        "opened",
        "collapsed"
      );
    }
  };

  useEffect(() => {
    let collapseTabsTemp: JSX.Element[] = [];
    content.forEach((tab: CollapseTab, index: number) => {
      collapseTabsTemp.push(
        <div className={`collapse__tab`} key={index}>
          <div
            className={`collapse__tab__header`}
            onClick={(e) => toggleCollapseTab(e)}
          >
            <p className={`collapse__tab__header__text`}>
              <div
                className={`collapse__tab__header__icon ${
                  initialActiveTabs?.includes(index) ? "opened" : "collapsed"
                }`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              {tab.header}
            </p>
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
