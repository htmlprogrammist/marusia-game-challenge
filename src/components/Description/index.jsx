import React from 'react';
import './style.css';
import Image from './../Image';
import birdsData from './../../data/birdsData';


function Description(props) {
  let chosenItem = props.choise || '-1';

  if (chosenItem === '-1') {
    return (
      <div className='description'>
      </div>
    )
  } else {

    const {image, name, species, description} = birdsData[props.level][chosenItem];

    return (
      <section className="wrapper-description">
        <Image
          className="description__image"
          url={image}
        />
        <div className="description__name">
          <div>{name}</div>
          <hr/>
          <div>{species}</div>
        </div>
        <p className="description__text">{description}</p>
      </section>
    );
  }
}

export default Description;
