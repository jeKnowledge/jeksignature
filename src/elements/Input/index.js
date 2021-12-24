import React from 'react'
import PropTypes from 'prop-types';
import {input, inputHeader} from './input.module.scss';

const Input = ({label, labelIcon, labelIconUrl, type, name, placeHolder, onChange, mandatory}) => {
  return (
    <div className={input}>
      <div className={inputHeader}>
        <label>{label}</label>
        <a href={labelIconUrl} target='_blank'><i className={labelIcon}></i></a>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        required={mandatory}
      />
    </div>
  )
}

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  labelIconUrl: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  mandatory: PropTypes.bool,
};
