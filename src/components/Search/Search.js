import React from "react";
import { Search as SemanticSearch } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/search.css";
import "./Search.scss";

function Search({ className, children, ...restProps }) {
  const extraClassName = classNames(`Search`, {
    [className]: !!className,
  });
  return (
    <SemanticSearch className={extraClassName} {...restProps}>
      {children}
    </SemanticSearch>
  );
}

export default Search;
