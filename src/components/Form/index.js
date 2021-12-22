import React, { useState } from 'react';
import {form, inputField} from './form.module.scss';
import Input from '../../elements/Input';
import Signature from '../Signature';
import Jekers from '../Jekers';

const Form = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [behance, setBehance] = useState('');

  const [showPhotos, setShowPhotos] = useState('');
  const [showSignature, setShowSignature] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('nome: ' + name + ' role: ' + role + 'curso: ' + course + 'Tel: ' + phone);
    setShowSignature(!showSignature);
  }

  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <div className={inputField}>

          <Input
            label='Nome'
            type='text'
            name='name'
            placeHolder='Insere o teu nome e apelido'
            onChange={(e)=>setName(e.target.value)}
            // mandatory
          />
          <br/>

          <Input
            label='Cargo'
            type='text'
            name='role'
            placeHolder='Qual é o teu cargo?'
            onChange={(e)=>setRole(e.target.value)}
            // mandatory
          />
          <br/>

          <Input
            label='Curso'
            type='text'
            name='course'
            placeHolder='O que estudas?'
            onChange={(e)=>setCourse(e.target.value)}
            // mandatory
          />
          <br/>

          <span>Contactos:</span>
          <br/>
          <br/>

          <Input
            label='Nº Telemóvel'
            type='tel'
            name='course'
            placeHolder='Indica o teu nº de telemóvel'
            onChange={(e)=>setPhone(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').trim())}
            // mandatory
          />
          <br/>

          <Input
            label='LinkedIn'
            // https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile
            type='text'
            name='linkedin'
            placeHolder='Username do linkedn'
            onChange={(e)=>setLinkedin(e.target.value)}
            // mandatory
          />
          <br/>

          <Input
            label='GitHub'
            type='text'
            name='github'
            placeHolder='Username do github'
            onChange={(e)=>setGithub(e.target.value)}
            // mandatory
          />
          <br/>

          <Input
            label='Behance'
            type='text'
            name='behance'
            placeHolder='Username do behance'
            onChange={(e)=>setBehance(e.target.value)}
            // mandatory
          />
          <br/>


          <Jekers pickImage={false}/>

          <button type='submit'>Submeter</button>
        </div>
      </form>
      {showSignature ?
        <Signature 
          jekerName={name}
          jekerRole={role}
          jekerCourse={course}
          jekerPhone={phone}
          jekerLinkedin={linkedin}
          jekerGithub={github}
          jekerBehance={behance}
        />
      : null}
    </>
  )
}

export default Form;
