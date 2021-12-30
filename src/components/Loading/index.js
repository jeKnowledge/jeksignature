import React from 'react'
import ReactLoading from 'react-loading';

import {loading} from './loading.module.scss';

const Loading = () => {
  return (
    <div className={loading}>
      <ReactLoading type={'spin'} color={'#EBEBEB'} />
    </div>
  )
}

export default Loading;
