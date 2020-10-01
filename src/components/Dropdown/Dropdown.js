import React from "react";
import { Dropdown as SemanticDropdown } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/dropdown.css";
import "./Dropdown.scss";

function Dropdown({ className, children, ...restProps }) {
  const extraClassName = classNames(`Dropdown`, {
    [className]: !!className,
  });
  return (
    <SemanticDropdown className={extraClassName} {...restProps}>
      {children}
    </SemanticDropdown>
  );
}

export default Dropdown;
