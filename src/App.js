import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GiLoveMystery } from "react-icons/gi";

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

  const rateChanged = value => {
    setRate(value);
  };

  return (
    <div className="App">
      <p>theme: gold, children: div - HTML Element</p>
      <Rating theme="gold">
        <div>div</div>
      </Rating>
      <p>theme: blueText, children: AiFillStar - react-icons component</p>
      <Rating theme="blueText">
        <AiFillStar />
      </Rating>
      <p>theme: redText, children: GiLoveMystery - react-icons component</p>
      <Rating theme="redText">
        <GiLoveMystery />
      </Rating>
      <p>theme: green</p>
      <Rating theme="green" />
      <p>theme: goldText, children: AiFillStar - react-icons component</p>
      <Rating theme="goldText">
        <AiFillStar />
      </Rating>
      <p>theme: yellow, children: * - plain text</p>
      <Rating theme="yellow">*</Rating>
      <p>
        containerStyles, containerActiveStyles, itemStyles, itemActiveStyles,
        children * - plain text
      </p>
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
      <p>
        containerStyles, containerActiveStyles, itemStyles, itemActiveStyles,
        value set to 3, children * - plain text, readonly
      </p>
      <Rating
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
        value="3"
        readOnly
      >
        *
      </Rating>
      <p>
        containerStyles, containerActiveStyles, itemStyles, itemActiveStyles,
        value set to 3, children * - plain text
      </p>
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
        containerStyles, containerActiveStyles, itemStyles, itemActiveStyles,
        value set to 3 - state, children * - plain text, allowUnselect - false,
        changed - update state
      </p>
      <Rating
        containerStyles={containerStyles}
        containerActiveStyles={containerActiveStyles}
        itemStyles={itemStyles}
        itemActiveStyles={itemActiveStyles}
        value={rate}
        allowUnselect={false}
        changed={rateChanged}
      >
        *
      </Rating>
      <p>
        itemClass, itemActiveClass,value set to 3 - state, children * - plain
        text, allowUnselect - false, changed - update state
      </p>
      <Rating
        value={rate}
        allowUnselect={false}
        changed={rateChanged}
        itemClass="customRatingItem"
        itemActiveClass="customRatingItem--active"
      >
        *
      </Rating>
    </div>
  );
}

export default App;
