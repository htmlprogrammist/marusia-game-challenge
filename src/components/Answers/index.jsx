import React from 'react';
import './style.css';
import Option from './Option';
import birdsData from './../../data/birdsData';

function Answers(props) {
  const info = birdsData[props.level];
  const cb = props.cb;
  const items = props.currentState;

  return (
    <section className="wrapper-answers">
      <ul className="answers-option__list">
        {
          items.map((item, index) => {
            const style = {
              backgroundColor: item
            }
            return (
              <Option
                name={info[index].name}
                key={info[index].id}
                line={'' + index}
                cb={cb}
                style={style}
              />
            )
          })
        }
      </ul>
    </section>
  );
}

export default Answers;
