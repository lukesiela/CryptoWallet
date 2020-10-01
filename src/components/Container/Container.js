import React from "react";
import { Container as SemanticContainer } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/container.css";
import "./Container.scss";

function Container({ className, children, ...restProps }) {
  const extraClassName = classNames(`Container`, {
    [className]: !!className,
  });
  return (
    <SemanticContainer className={extraClassName} {...restProps}>
      {children}
    </SemanticContainer>
  );
}

export default Container;
