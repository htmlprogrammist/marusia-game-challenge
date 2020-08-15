import React from 'react';
import './style.css';
import Image from './../Image';
import birdsData from './../../data/birdsData';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Question(props) {
  const level = props.level;
  const rightAnswer = props.rightAnswer;
  const {audio, image, name} = birdsData[level][rightAnswer];

  return (
    <div className='wrapper-question'>
      <Image
        className='question__image'
        url={image}
        isHidden={(!props.visibility)}
      />
      <span className='question__name'>{(props.visibility) ? name : '*******'}</span>
      <AudioPlayer
        src={audio}
        showVolumeControl={false}
        showLoopControl={false}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
}

export default Question;
