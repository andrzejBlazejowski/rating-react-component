import React, { useState } from "react";

import RateItem from "./RateItem/RateItem";

import classes from "./Rating.module.scss";

const Rating = props => {
  const [hoveredValue, setHoveredValue] = useState(-1);
  const [chosenValue, setChosenValue] = useState(props.value);
  const items = [];
  const {
    minValue = 0,
    maxValue = 5,
    allowUnselect = true,
    itemClass = "rating__item",
    itemActiveClass = "rating__item--active", // nie możesz przekazać booleana? w sensie że jak ? przekazujesz czy jest aktywny i wtedy doajesz klase? tak robię. tylko to można przekazac z app.js
    theme = "",
    readOnly = false,
    itemStyles = {},
    itemActiveStyles = {},
    containerStyles = {},
    containerActiveStyles = {}
  } = props;
  const handleHover = (value = -1) => {
    setHoveredValue(value);
  };

  const handleItemClick = (value = -1) => {
    if (chosenValue === value && allowUnselect) value = -1;

    if (chosenValue !== value) {
      setChosenValue(value);

      if (typeof props.changed === "function") {
        props.changed(value);
      }
    }
  };

  for (let i = parseInt(minValue); parseInt(maxValue) >= i; i++) {
    const active =
      hoveredValue >= i || (hoveredValue === -1 && chosenValue >= i);

    items.push(
      <RateItem
        key={i}
        value={i}
        active={active}
        clicked={handleItemClick}
        mouseEvents={handleHover}
        itemClass={itemClass}
        itemActiveClass={itemActiveClass}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        theme={theme}
        readOnly={readOnly}
      >
        {props.children}
      </RateItem>
    );
  }

  return <div className={classes.rating}>{items}</div>;
};

export default Rating;
