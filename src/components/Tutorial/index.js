import React from 'react'
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'

import {tutorial, tutorialContainer, closeBtn} from './tutorial.module.scss';

const Tutorial = ({close}) => {
  return (
    <div className={tutorial}>
      <div className={tutorialContainer}>
        <ReactPlayer
          url='tutorial.mp4'
          playing
          loop
          controls
          muted
        />
      </div>
      <button type='button' onClick={close} className={closeBtn}><i class="fas fa-times"></i></button>
    </div>
  )
}

export default Tutorial

Tutorial.propTypes = {
  close: PropTypes.func,
};
