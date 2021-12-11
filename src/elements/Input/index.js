import React from 'react'
import PropTypes from 'prop-types';

const Input = ({label, type, name, placeHolder, onChange, mandatory}) => {
  return (
    <div className='input'>
      <label>{label}</label>
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
  type: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  mandatory: PropTypes.bool,
};
