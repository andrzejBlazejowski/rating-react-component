import React from "react";

import classes from "./RateItem.module.scss";

const rateItem = props => {
  const itemClasses = [props.itemClass, classes.item];
  const containerClasses = [classes.container];
  let containerStyles = {};
  let itemStyles = {};

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
        props.clicked(props.value);
      }}
      onMouseEnter={() => {
        props.mouseEvents(props.value);
      }}
      onMouseLeave={() => {
        props.mouseEvents();
      }}
      className={containerClasses.join(" ")}
    >
      <div style={itemStyles} className={itemClasses.join(" ")}>
        {props.children}
      </div>
    </div>
  );
};

export default rateItem;
