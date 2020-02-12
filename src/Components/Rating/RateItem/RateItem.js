import React from 'react';

import classes from './RateItem.module.scss';

const rateItem = (props) =>{
  return <div 
    onClick={()=>{props.clicked(props.value)}}
    onMouseEnter={()=>{props.mouseEvents(props.value)}}
    onMouseLeave={()=>{props.mouseEvents()}}
    className={classes.rating__container + ' ' + (props.active ? classes['rating__container--active']: '')}>
    <div className={classes.rating__item + ' ' + (props.active ? classes['rating__item--active']: '')}>
      {props.children}
    </div>
  </div>
}

export default rateItem;