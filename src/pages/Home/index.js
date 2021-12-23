import React from 'react';
import Form from '../../components/Form';
import {contentContainer, intro} from './home.module.scss';

const Home = () => {

  return (
    <div className={contentContainer}>
      <div className={intro}>
        <h1>jeKsignature</h1>
      </div>
      <Form />
    </div>
  )
}

export default Home;