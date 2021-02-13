import React from "react";
import { ToastVariant } from "../types/ToasterTypes";

class Toaster {
  private variant: ToastVariant = "primary";
  private DOMNode: React.ReactNode = null;
  constructor() {
    React.createElement<React.Component>(
      "div",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "div"
    );
  }

  public toast(variant: ToastVariant): void {
    this.variant = variant;
    return console.log("Spawned Toast of tpye " + variant);
  }

  public static toast(): void {
    return console.log("🍞🍫 Starting to toast 4 Toasts with Nutella...");
  }
}

export default Toaster;
