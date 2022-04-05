import React from 'react';
import { Field } from 'formik';

export const CheckboxInput = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className='form-control checkbox-container'>
      <Field
        className='check'
        type='checkbox'
        name={name}
        id={name}
        {...rest}
      />
      <label htmlFor={name}>
        <div className='custom-checkbox'>
          <span>&#10003;</span>
        </div>
        {label}
      </label>
    </div>
  );
};
