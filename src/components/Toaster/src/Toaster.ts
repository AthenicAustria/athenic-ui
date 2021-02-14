import React from "react";
import ReactDOM from "react-dom";
import { ToastVariant } from "../types/ToasterTypes";
import { ToastManager } from "../index";

function log(
  target: Object,
  propertyName: string,
  propertyDesciptor: PropertyDescriptor
): PropertyDescriptor {
  const method = propertyDesciptor.value;

  propertyDesciptor.value = function (...args: any[]) {
    const params = args.map((a) => JSON.stringify(a)).join();
    const result = method.apply(this, args);

    console.log(`Call: ${propertyName}(${params}) => ${result}`);

    return result;
  };
  return propertyDesciptor;
}

class Toaster {
  private _variant: ToastVariant = "primary";
  private _DOMNode: React.ReactNode = null;
  private _manager: JSX.Element = null;

  constructor() {
    this._createManager();
  }

  public init: () => void = () => {
    return this._manager;
  };

  /*eslint-disable no-unused-vars */
  public toast: (variant: ToastVariant) => void = (variant: ToastVariant) => {
    this._variant = variant;
    console.log("Spawned Toast of type " + variant);
  };

  @log
  public static toast(topping: string): string {
    return `🍞🍫 Starting to toast 4 Toasts with ${topping}`;
  }

  private _createManager(): void {
    const managerWrapper: HTMLElement = document.createElement("div");
    managerWrapper.setAttribute("data-athenic-ui-toast-manager-wrapper", "");
    document.body.appendChild(managerWrapper);
    this._manager = React.createElement(ToastManager);
    ReactDOM.render(this._manager, managerWrapper);
  }
}

export default Toaster;
