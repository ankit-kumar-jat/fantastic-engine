import React from "react";
import { classNames } from "utils";

export function Container({ children, className }) {
  return (
    <div className={classNames("mx-auto container p-4", className)}>
      {children}
    </div>
  );
}

export default Container;
