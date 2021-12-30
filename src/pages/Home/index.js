import React, {useState, useEffect} from 'react'
import Form from '../../components/Form';
import {contentContainer, intro, introFade, introFadeOut} from './home.module.scss';

const Home = () => {
  const [introAnimation, setIntroAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroAnimation(false)
    }, 3500)
  }, [])


  return (
    <div className={contentContainer}>
        <div className={`${intro} && ${introAnimation ? introFade : introFadeOut}`}>
          <h1>jeKsignature</h1>
        </div>
      <Form />
    </div>
  )
}

export default Home;