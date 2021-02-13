import React from "react";
import { ToastVariant } from "../types/ToasterTypes";
import "./Toaster.scss";

class Toaster {
  private _variant: ToastVariant = "primary";
  private _DOMNode: React.ReactNode = null;
  private _manager: JSX.Element = null;

  constructor() {
    this._manager = this._createManager();
  }

  public init: () => this = () => {
    console.log("hi");
    return this;
  };

  /*eslint-disable no-unused-vars */
  public toast: (variant: ToastVariant) => this = (variant: ToastVariant) => {
    console.log("Spawned Toast of type " + variant);
    return this;
  };

  /*eslint-disable no-unused-vars */
  public static toast(): void {
    return console.log("🍞🍫 Starting to toast 4 Toasts with Nutella...");
  }

  private _createManager(): JSX.Element {
    return React.createElement("div", { id: "toaster-manager" });
  }
}

export default Toaster;
