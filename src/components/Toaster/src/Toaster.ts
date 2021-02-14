/*eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Toast, ToastManager } from "../index";
import { ToastProps } from "./Toast";

function logRealToast(
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
  private static _managerWrapper: HTMLElement = null;
  private static _manager: JSX.Element = null;
  private static _toasts: JSX.Element[] = [];
  private static _managerWrapperDataAttr: {
    "data-athenic-ui-toast-manager-wrapper": string;
  } = {
    "data-athenic-ui-toast-manager-wrapper": "",
  };
  private static _closeDelay: number = 4000;

  public static managerDataAttr: {
    "data-athenic-ui-toast-manager": string;
  } = {
    "data-athenic-ui-toast-manager": "",
  };

  public static setDespawnDelay(ms: number): typeof Toaster {
    Toaster._closeDelay = ms;
    return this;
  }

  public static toast(props: ToastProps): typeof Toaster {
    if (!Toaster._managerWrapper) Toaster._createManagerWrapper();

    Toaster._toasts.unshift(React.createElement(Toast, props));
    setTimeout(() => {
      Toaster._toasts.pop();
      Toaster._updateManager();
    }, Toaster._closeDelay);

    Toaster._updateManager();
    return this;
  }

  @logRealToast
  public static toastRealToast(topping: string): string {
    return `🍞🍫 Starting to toast 4 Toasts with ${topping}`;
  }

  private static _createManagerWrapper(): void {
    Toaster._managerWrapper = document.createElement("div");
    Toaster._managerWrapper.setAttribute(
      Object.keys(this._managerWrapperDataAttr)[0],
      this._managerWrapperDataAttr["data-athenic-ui-toast-manager-wrapper"]
    );
    document.body.appendChild(Toaster._managerWrapper);
  }

  private static _updateManager(): void {
    Toaster._manager = React.createElement(ToastManager, {
      toastElements: Toaster._toasts,
    });
    ReactDOM.render(Toaster._manager, Toaster._managerWrapper);
  }
}

export default Toaster;
