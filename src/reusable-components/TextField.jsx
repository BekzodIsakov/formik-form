import React from 'react';
import { TextInput } from './TextInput';
import { EmailInput } from './EmailInput';
import { SelectInput } from './SelectInput';
import { PasswordInput } from './PasswordInput';
import { CheckboxInput } from './CheckboxInput';

const TextField = (props) => {
  const { type, options, ...rest } = props;

  switch (type) {
    case 'text':
      return <TextInput {...rest} />;
    case 'email':
      return <EmailInput {...rest} />;
    case 'password':
      return <PasswordInput {...rest} />;
    case 'select':
      return <SelectInput {...rest} options={options} />;
    case 'checkbox':
      return <CheckboxInput {...rest} />;
    default:
      return null;
  }
};

export default TextField;
