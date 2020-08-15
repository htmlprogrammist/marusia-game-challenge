import React from 'react'
import './style.css'

function Option(props) {
  const handleClick = props.cb;
  const line = props.line;
  const name = props.name;
  const style = props.style;

  return (
    <li className='answers-option__li' onClick={() => {
      handleClick(line)
    }}>
      <div className='answers-option__flag' style={style}>
      </div>
      <span className='answers-option__name'>{name}</span>
    </li>
  );
}

export default Option;
