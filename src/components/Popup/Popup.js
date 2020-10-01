import React from "react";
import { Popup as SemanticPopup } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/popup.css";
import "./Popup.scss";

function Popup({ className, children, ...restProps }) {
  const extraClassName = classNames(`Popup`, {
    [className]: !!className,
  });
  return (
    <SemanticPopup className={extraClassName} {...restProps}>
      {children}
    </SemanticPopup>
  );
}

export default Popup;
