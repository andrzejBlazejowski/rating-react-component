import React, { useState } from "react";
import PropTypes from "prop-types";

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
    itemActiveClass = "rating__item--active",
    theme = "gold",
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

Rating.propTypes = {
  value: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  allowUnselect: PropTypes.bool,
  itemClass: PropTypes.string,
  itemActiveClass: PropTypes.string,
  theme: PropTypes.string,
  readOnly: PropTypes.bool,
  itemStyles: PropTypes.object,
  itemActiveStyles: PropTypes.object,
  containerStyles: PropTypes.object,
  containerActiveStyles: PropTypes.object,
  child: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.instanceOf(React.Component),
    PropTypes.string
  ])
};

export default Rating;
