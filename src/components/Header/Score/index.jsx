import React from 'react';
import "./style.css";

function Score(props) {
  const currentScore = props.currentScore;

  return (
    <section className="wrapper-score">
      <span>Score: </span>
      <span className="counter">{currentScore}</span>
    </section>
  );
}

export default Score;
