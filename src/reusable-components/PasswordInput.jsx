import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { ErrorComponent } from './ErrorComponent';

export const PasswordInput = (props) => {
  const { name, label, placeholder, ...rest } = props;

  return (
    <div className='form-control'>
      {placeholder ? null : <label htmlFor={name}>{label || name}</label>}
      <Field
        type='password'
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage component={ErrorComponent} name={name} />
    </div>
  );
};
