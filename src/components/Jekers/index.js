import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types';
import {jekers, jekersContainer, jeker, closeBtn} from './jekers.module.scss';

const Jekers = ({close}) => {
  const [jekerData, setJekerData] = useState();

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

  return (
    <div className={jekers}>
      <div className={jekersContainer}>
        {jekerData?.map((item, i) => (
          <div key={i} className={jeker}>
            <img src={item.Imagem} alt={item.Nome + '_portrait'}/>
            <p>{item.Nome}</p>
          </div>
        ))}
      </div>
      <button type='button' onClick={close} className={closeBtn}>Fechar</button>
    </div>
  );
}
export default Jekers;

Jekers.propTypes = {
  close: propTypes.func,
};