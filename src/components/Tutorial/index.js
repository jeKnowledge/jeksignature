import React from 'react'
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'

import {tutorial, tutorialHeader, tutorialContainer} from './tutorial.module.scss';

const Tutorial = ({close}) => {
  return (
    <div className={tutorial}>
      <div className={tutorialHeader}>
        <h2>Adiciona a tua assinatura ao <a href='https://mail.google.com/mail/#settings/general'>Gmail</a></h2>
        <button type='button' onClick={close}><i class="fas fa-times"></i></button>
      </div>
      <div className={tutorialContainer}>
        <ReactPlayer
          url='tutorial.mp4'
          controls
        />
      </div>
    </div>
  )
}

export default Tutorial

Tutorial.propTypes = {
  close: PropTypes.func,
};
