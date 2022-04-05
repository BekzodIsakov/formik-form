import React from 'react';
import { Field } from 'formik';

export const SelectInput = (props) => {
  const { name, options, label, placeholder, ...rest } = props;

  return (
    <div className='form-control'>
      {placeholder ? null : <label htmlFor={name}>{label || name}</label>}
      <Field as='select' id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Field>
    </div>
  );
};
