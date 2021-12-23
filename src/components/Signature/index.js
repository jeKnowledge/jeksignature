import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { exportComponentAsJPEG } from 'react-component-export-image';
import Draggable from "react-draggable";

import phoneIcon from '../../assets/tlm.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import behanceIcon from '../../assets/behance.svg';
import logoJek from '../../assets/logo.svg';
import {signatureContainer, mySignature, signatureInfo, contacts, signatureImage, logo, logoVertical} from './signature.module.scss';

const ComponentToPrint = React.forwardRef(({name, role, course, phone, linkedin, github, behance, portrait}, ref) => (
  <div className={mySignature} ref={ref}>
    <div className={signatureInfo}>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <h3>{course}</h3>

      <ul className={contacts}>
      {phone !== '' ? (
        <li>
          <img src={phoneIcon} alt='mobile-icon' />
          <p>+351 {phone}</p>
        </li>
        ) : null}
        {linkedin !== '' ? (
        <li>
          <img src={linkedinIcon} alt='linkedin-icon' />
          <p>linkedin/{linkedin}</p>
        </li>
        ) : null}
        {github !== '' ? (
        <li>
          <img src={githubIcon} alt='github-icon' />
          <p>github/{github}</p>
        </li>
        ) : null}
        {behance !== '' ? (
        <li>
          <img src={behanceIcon} alt='behance-icon' />
          <p>behance/{behance}</p>
        </li>
        ) : null}
      </ul>
    </div>

    <div className={signatureImage}>
      <Draggable>
        <div>
          <img src={portrait} alt='jeker-portrait'/>
        </div>
      </Draggable>
    </div>

    <img className={portrait !== null ? logo : logoVertical} src={logoJek} alt='jek-logo'/>
  </div>
));

const Signature = ({ jekerName, jekerRole, jekerCourse, jekerPhone, jekerLinkedin, jekerGithub, jekerBehance, jekerPortrait }) => {

  const signatureRef = useRef();

  return (
    <div className={signatureContainer}>

      <ComponentToPrint
        ref={signatureRef}
        name={jekerName}
        role={jekerRole}
        course={jekerCourse}
        phone={jekerPhone}
        linkedin={jekerLinkedin}
        github={jekerGithub}
        behance={jekerBehance}
        portrait={jekerPortrait}
      />
      <button onClick={() => exportComponentAsJPEG(signatureRef)}>
        Export As JPEG
      </button>
      
    </div>
  )
}

export default Signature;

Signature.propTypes = {
  jekerName: PropTypes.string,
  jekerRole: PropTypes.string,
  jekerCourse: PropTypes.string,
  jekerPortrait: PropTypes.string,
};
