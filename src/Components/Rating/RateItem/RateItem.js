import React from "react";
import PropTypes from "prop-types";

import classes from "./RateItem.module.scss";

const rateItem = props => {
  const itemClasses = [props.itemClass, classes.item];
  const containerClasses = [classes.container];
  let child = null;
  let containerStyles = {};
  let itemStyles = {};

  if (props.children instanceof React.Component) {
    child = React.cloneElement(props.children[0], props);
  } else if (typeof props.children === "string") {
    child = props.children;
  } else if (React.isValidElement(props.children)) {
    child = React.cloneElement(props.children, props);
  }

  if (props.active) {
    containerClasses.push(classes.active);
    itemClasses.push(classes.active, props.itemActiveClass);
    if (props.itemActiveStyles) {
      itemStyles = props.itemActiveStyles;
    }
    if (props.containerActiveStyles) {
      containerStyles = props.containerActiveStyles;
    }
  } else {
    if (props.itemStyles) {
      itemStyles = props.itemStyles;
    }
    if (props.containerStyles) {
      containerStyles = props.containerStyles;
    }
  }

  if (props.theme) {
    containerClasses.push(classes[props.theme]);
    itemClasses.push(classes[props.theme]);
  }

  return (
    <div
      style={containerStyles}
      onClick={() => {
        if (!props.readOnly) props.clicked(props.value);
      }}
      onMouseEnter={() => {
        if (!props.readOnly) props.mouseEvents(props.value);
      }}
      onMouseLeave={() => {
        if (!props.readOnly) props.mouseEvents();
      }}
      className={containerClasses.join(" ")}
    >
      <div style={itemStyles} className={itemClasses.join(" ")}>
        {child}
      </div>
    </div>
  );
};

rateItem.propTypes = {
  key: PropTypes.number.isRequired(),
  value: PropTypes.number.isRequired(),
  active: PropTypes.bool.isRequired(),
  clicked: PropTypes.func.isRequired(),
  mouseEvents: PropTypes.func.isRequired(),
  itemClass: PropTypes.string,
  itemActiveClass: PropTypes.string,
  itemStyles: PropTypes.object,
  itemActiveStyles: PropTypes.object,
  containerStyles: PropTypes.object,
  containerActiveStyles: PropTypes.object,
  theme: PropTypes.string,
  readOnly: PropTypes.bool,
  child: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.instanceOf(React.Component),
    PropTypes.string
  ])
};

export default rateItem;
