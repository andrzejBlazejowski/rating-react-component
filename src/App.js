import React, { useState } from "react";

import Rating from "./Components/Rating/Rating";

import "./App.css";

function App() {
  const [rate, setRate] = useState(3);
  let containerStyles = {
    width: "20px",
    height: "20px"
  };

  let containerActiveStyles = {
    width: "20px",
    height: "20px"
  };
  let itemStyles = {
    color: "#61FFD0",
    background: "#20B387"
  };
  let itemActiveStyles = {
    color: "#FF977A",
    background: "#B34E32"
  };

  const ratChanged = value => {
    setRate(value);
  };

  return (
    <div className="App">
      <p>easiest call</p>
      <Rating />
      <p>children passed</p>
      <Rating>*</Rating>
      <p>children and styles passed</p>
      <Rating
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
      >
        *
      </Rating>
      <p>allowUnselect = false</p>
      <Rating allowUnselect={false}></Rating>
      <p>minValue = 1, maxValue = 10</p>
      <Rating minValue="1" maxValue="10"></Rating>
      <p>value set to 3, styles and child passed</p>
      <Rating
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
        value="3"
      >
        *
      </Rating>
      <p>value set to 3, styles and child passed</p>
      <Rating
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
        value="3"
      >
        *
      </Rating>
      <p>
        set set to {rate}, added onClick callback, allow unselect false, styles
        and child passed
      </p>
      <Rating
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
        value={rate}
        allowUnselect={false}
        changed={ratChanged}
      >
        *
      </Rating>
      <p>
        Classes changed !, set set to {rate}, added onClick callback, allow
        unselect false, styles and child passed
      </p>
      <Rating
        value={rate}
        allowUnselect={false}
        changed={ratChanged}
        itemClass="customRatingItem"
        itemActiveClass="customRatingItem--active"
      >
        *
      </Rating>
    </div>
  );
}

export default App;
