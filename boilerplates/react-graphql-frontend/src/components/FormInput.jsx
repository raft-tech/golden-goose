// TODO: add prop validation
/* eslint-disable react/prop-types */

import React from 'react';

const FormInput = ({
  name,
  label,
  type,
  onChange,
  value,
  required = false,
}) => (
  <div className="form-input">
    <label htmlFor={name}>{label}</label>
    <input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      required={required}
    />
  </div>
);

export default FormInput;
