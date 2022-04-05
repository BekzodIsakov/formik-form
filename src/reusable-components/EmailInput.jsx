import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { ErrorComponent } from './ErrorComponent';

export const EmailInput = (props) => {
  let { name, label, placeholder, ...rest } = props;

  return (
    <div className='form-control'>
      {placeholder ? null : <label htmlFor={name}>{label || name}</label>}
      <Field
        type='email'
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage component={ErrorComponent} name={name} />
    </div>
  );
};
