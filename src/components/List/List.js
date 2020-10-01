import React from "react";
import { List as SemanticList } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/list.css";
import "./List.scss";

function List({ className, children, ...restProps }) {
  const extraClassName = classNames(`List`, {
    [className]: !!className,
  });
  return (
    <SemanticList className={extraClassName} {...restProps}>
      {children}
    </SemanticList>
  );
}

export default List;
