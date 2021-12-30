import React, { useState, useEffect } from 'react';

import Input from '../../elements/Input';
import Signature from '../Signature';
import Loading from '../Loading';

import {formContainer, form, inputField, contacts, importImage, upload} from './form.module.scss';
import {jekers, jekersContainer, jeker, closeBtn} from './jekers.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [behance, setBehance] = useState('');
  const [photo, setPhoto] = useState('');

  const [showGallery, setShowGallery] = useState(false);
  const [loadingComponent, setLoadingComponent] = useState(true);
  const [jekerData, setJekerData] = useState();

  const [showSignature, setShowSignature] = useState('');


  const handleGallery = () => {
    setShowGallery(!showGallery);

    setTimeout(() => {
      setLoadingComponent(false);
    }, 6000);
  }
  const getData = () => {
    var teamContent = new XMLHttpRequest();

    teamContent.onreadystatechange = function () {
      if (teamContent.readyState === XMLHttpRequest.DONE) {
        if (teamContent.status === 200) {
          teamObject();
        } else if (teamContent.status === 400) {
          console.log("There was an error 400");
        } else {
          console.log("something else other than 200 was returned");
        }
      }
    };
    
    teamContent.open(
      "GET",
      "https://spreadsheets.google.com/spreadsheets/d/1fD37bWX_ukj-oSE4mlYjDUHKlwDCZ37aWdkzsyeqDwU/gviz/tq?tqx=out:json",
      true
    );
    teamContent.send();
    
    function teamObject() {
      var originalText = teamContent.responseText;
      var textObject = JSON.parse(originalText.substring(47).slice(0, -2));
      window.teamContent = textObject.table.rows;
      var jekMember = textObject.table.rows;
      // console.log(jekMember);
      setJekerData(jekMember);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  console.log(loadingComponent);

  const getImage = (image) => {
    setPhoto(image);
   }   

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('nome: ' + name + ' role: ' + role + 'curso: ' + course + 'Tel: ' + phone);
    setShowSignature(!showSignature);
  }

  return (
    <div className={formContainer}>
      <form className={form} onSubmit={handleSubmit}>
        <div className={inputField}>

        <h3>Informações pessoais:</h3>
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

          <h3>Contactos:</h3>
          <div className={contacts}>

            <Input
              label='Nº Telemóvel'
              type='tel'
              name='course'
              placeHolder='Indica o teu nº de telemóvel'
              onChange={(e)=>setPhone(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').trim())}
              // mandatory
            />

            <Input
              label='LinkedIn'
              labelIcon='fas fa-question-circle'
              labelIconUrl='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
              type='text'
              name='linkedin'
              placeHolder='Username do linkedn'
              onChange={(e)=>setLinkedin(e.target.value)}
              // mandatory
            />

            <Input
              label='GitHub'
              type='text'
              name='github'
              placeHolder='Username do github'
              onChange={(e)=>setGithub(e.target.value)}
              // mandatory
            />

            <Input
              label='Behance'
              type='text'
              name='behance'
              placeHolder='Username do behance'
              onChange={(e)=>setBehance(e.target.value)}
              // mandatory
            />
          </div>

          <br/>

          <h3>Fotografia:</h3>
          <div className={importImage}>
            <label class={upload}>
              <input
                type="file"
                name='photo'
                accept=".png, .jpeg, .jpg, .tiff"
                max={1}
                onChange={(e)=>setPhoto(URL.createObjectURL(e.target.files[0]))}
              />
              <i className="fas fa-arrow-circle-up"></i>
              <span>Importar foto</span>
            </label>

            <span>ou</span>

            <button type='button' onClick={handleGallery}>
              <i className="fab fa-google-drive"></i>
              <span>Escolher foto da drive</span>
            </button>
          </div>

          {showGallery ? (
          <div className={jekers}>
            <div className={jekersContainer}>

              {loadingComponent ? <Loading /> : null}
              
              {jekerData?.map((item, i) => (
                <>
                  {item.c[1].v !== null ?
                    <div key={i} className={jeker} onClick={handleGallery}>
                      <img src={item.c[1].v} alt={item.Nome + '_portrait'} onClick={() => {getImage(item.c[1].v)}}/>
                      <p>{item.c[0].v}</p>
                    </div>
                  : null
                  }
                </>
              ))}
            </div>
            <button type='button' onClick={handleGallery} className={closeBtn}><i class="fas fa-times"></i></button>
          </div>
          ) : null}
          
        </div>
      </form>
        <Signature 
          jekerName={name}
          jekerRole={role}
          jekerCourse={course}
          jekerPhone={phone}
          jekerLinkedin={linkedin}
          jekerGithub={github}
          jekerBehance={behance}
          jekerPortrait={photo !== '' ? photo : null}
        />
    </div>
  )
}

export default Form;