import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types';
import {jekers, jekersContainer, jeker, closeBtn, selectedJeker, signatureImage} from './jekers.module.scss';

const Jekers = ({pickImage}) => {
  const [jekerData, setJekerData] = useState();
  const [jekerImage, setJekerImage] = useState('');
  const [showGallery, setShowGallery] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/dec96666-6e2e-428b-b7bc-64c27fa0b85f"
      );
      const data = await res.json();
      setJekerData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getImage = (image) => {
    setJekerImage(image);
    console.log(jekerImage);
   }   

   const handleGallery = () => {
     setShowGallery(!showGallery);
   }

  return (
    <div>
    {pickImage ? (
    <div className={signatureImage}>
      <img src={jekerImage} alt='choosed-jeker'/>
    </div>
    ) : (
    <button type='button' onClick={handleGallery}>Escolher foto</button> 
    )}

      {showGallery ? (
      <div className={jekers}>
        <div className={jekersContainer}>
          {jekerData?.map((item, i) => (
            <div key={i} className={jeker} onClick={handleGallery}>
              <img src={item.Imagem} alt={item.Nome + '_portrait'} onClick={() => {getImage(item.Imagem)}}/>
              <p>{item.Nome}</p>
            </div>
          ))}
        </div>
        <button type='button' onClick={handleGallery} className={closeBtn}>Fechar</button>
      </div>
      ) : null}
    </div>
  );
}
export default Jekers;

Jekers.propTypes = {
  close: propTypes.func,
  pickImage: propTypes.bool,
};