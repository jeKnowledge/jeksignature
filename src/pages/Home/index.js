import React from 'react';
import Form from '../../components/Form';
import {contentContainer} from './home.module.scss';

const Home = () => {

  return (
    <div className={contentContainer}>
      <h1>jeKsignature</h1>
      <Form />
    </div>
  )
}

export default Home;