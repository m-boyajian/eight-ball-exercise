import React, { useState } from 'react';
import './EightBall.css'
import defaultAnswers from './answers.json';
import { choice } from './random';

function EightBall ({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  // function handleClick (evt) {
  //   setAnswer(choice(answers));
  // }

  function handleClick (evt) {
    const newAnswer = choice(answers);
    setAnswer(newAnswer);

    setTimeout(() => {
      setAnswer({
        msg: "Think of a Question",
        color: "black",
      });
    }, 4000);
  }
  
  return (
    <div className="EightBall-container">
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: answer.color }}>
        <p className="EightBall-text">{answer.msg}</p>
      </div>
    </div>
  );
}

export default EightBall;



