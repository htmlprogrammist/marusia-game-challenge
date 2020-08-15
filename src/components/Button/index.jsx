import React from 'react';
import './style.css';

function Button(props) {
  const divStyleActive = {
    backgroundColor: '#00bc8c',
    cursor: 'pointer'
  }

  const divStyleDisabled = {
    backgroundColor: '#182c45'
  }

  return (
    <div className='btn'
         onClick={props.cb}
         style={(props.isActive) ? divStyleActive : divStyleDisabled}>
      {props.message}
    </div>
  );
}

export default Button;
