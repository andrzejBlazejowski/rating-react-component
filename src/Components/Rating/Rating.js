import React, { useState } from 'react';

import RateItem from './RateItem/RateItem';

import classes from './Rating.module.scss';

const Rating = (props) => {
  const [ hoveredValue, setHoveredValue ] = useState(-1);
  const [ chosenValue, setChosenValue ] = useState(-1);
  const items = [];

  const handleHover = ( value = -1 ) => {
    setHoveredValue(value);
  }

  const handleItemClick = ( value = -1 ) => {
    if( chosenValue === value ) value = -1;
    setChosenValue(value);
  }

  const rates = [
    {
      value: 0,
      disabled: true
    },
    {
      value: 1,
      disabled: true
    },
    {
      value: 2,
      disabled: true
    },
    {
      value: 3,
      disabled: true
    },
    {
      value: 4,
      disabled: true
    },
  ];

  rates.map( (item)=>{
    const active = (hoveredValue >= item.value || 
      (hoveredValue === -1 && chosenValue >= item.value ) )

    items.push(<RateItem
      key={item.value}
      value={item.value}
      active={active}
      clicked={handleItemClick}
      mouseEvents={handleHover}>
        {props.children}
      </RateItem>);
  });



  return <div className={classes.rating}>
    {items}
  </div>
}

export default Rating;