import React, {useState, useEffect} from 'react'
import Form from '../../components/Form';
import {contentContainer, intro, introFade, introFadeOut} from './home.module.scss';

const Home = () => {
  const [introAnimation, setIntroAnimation] = useState(true);

  useEffect(() => {
    document.body.style.position = 'fixed';
    setTimeout(() => {
      setIntroAnimation(false);
      document.body.style.position = 'unset';
    }, 4000)
  }, [])

  return (
    <div className={contentContainer}>
        <div className={`${intro} && ${introAnimation ? introFade : introFadeOut}`}>
          <img src='signature.gif' alt='logo-animation'/>
        </div>
      <Form />
    </div>
  )
}

export default Home;