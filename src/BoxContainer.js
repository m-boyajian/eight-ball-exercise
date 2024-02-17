import React, { useState } from 'react';
import Box from './Box';
import './BoxContainer.css';
import {choice, randomInteger} from './random';

const defaultColors = ["chartreuse", "green", "gold", "hotpink", "seagreen", "lightpink", 
"plum", "sandybrown", "goldenrod", "red","lightskyblue","red","dimgray",];

function BoxContainer ({allColors=defaultColors, numBoxes=16}) {
  const [boxes, setBoxes] = useState(getRandomColors);

  /** Return array of random colors. */
  function getRandomColors() {
    return Array.from(
        { length: numBoxes },
        () => choice(allColors));
  }

  function handleClick(evt) {
    setBoxes(boxes => {
      let idx = randomInteger(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
      <div>
        <section className="BoxContainer">{boxComponents}</section>
        <button onClick={handleClick}>Change a Box</button>
      </div>
  );
}

export default BoxContainer;