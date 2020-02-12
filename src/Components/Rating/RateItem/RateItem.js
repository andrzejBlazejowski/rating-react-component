import React from "react";

import classes from "./RateItem.module.scss";

const rateItem = props => {
  const itemClasses = [props.itemClass, classes.rating__item];
  const containerClasses = [classes.rating__container];
  let containerStyles = {};
  let itemStyles = {};

  if (props.active) {
    containerClasses.push(classes["rating__container--active"]);
    itemClasses.push(classes["rating__item--active"], props.itemActiveClass);
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
