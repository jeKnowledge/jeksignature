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

  const [showPhotos, setShowPhotos] = useState('');
  const [showSignature, setShowSignature] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('nome: ' + name + ' role: ' + role + 'curso: ' + course + 'Tel: ' + phone);
    setShowSignature(!showSignature);
  }

  const handleGallery = () => {
    setShowPhotos(!showPhotos);
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

          <Input
            label='Nº Telemóvel'
            type='tel'
            name='course'
            placeHolder='Indica o teu nº de telemóvel'
            onChange={(e)=>setPhone(e.target.value)}
            // mandatory
          />

          <br/>

          <button type='button' onClick={handleGallery}>Escolher foto</button>

          <br/>

          <button type='submit'>Submeter</button>
        </div>
      </form>
      {showSignature ? <Signature jekerName={name}/> : null}
      {showPhotos ? <Jekers close={handleGallery} /> : null}
    </>
  )
}

export default Form;
