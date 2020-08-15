import React from 'react';
import "./style.css";
import Score from './Score';

function Header(props) {
  const currentScore = props.currentScore;

  return (
    <section className="wrapper-header">
      <nav>
        <Score currentScore={currentScore}/>
      </nav>
    </section>
  );
}

export default Header;
