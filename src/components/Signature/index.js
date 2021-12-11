import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import {signatureContainer} from './signature.module.scss';

const Signature = ({jekerName}) => {

  const canvasRef = useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = ctx => {
    ctx.fillStyle = '#f00000'

    ctx.font = "20px";
    ctx.fillText(jekerName, 300, 100);
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    draw(context)
  }, [draw])

  return (
    <div className={signatureContainer}>
      <canvas ref={canvasRef} width={600} height={200}/>
    </div>
  )
}

export default Signature;

Signature.propTypes = {
  jekerName: PropTypes.string,
};
