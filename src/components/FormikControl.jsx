import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../reusable-components/TextField';
import { UserAgreement } from '../reusable-components/UserAgreement';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  role: '',
};

const onSubmit = (values) => {
  alert('You have logged in');
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Required'),
  companyName: Yup.string().required('Required'),
  role: Yup.string(),
  agreement: Yup.bool().required(),
});

export const FormikControl = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur={false}
    >
      {(formik) => {
        return (
          <Form autoComplete='off'>
            <TextField placeholder='Name' type='text' name='name' />
            <TextField type='email' name='email' placeholder='Email' />
            <TextField
              type='password'
              name={'password'}
              placeholder='Password'
            />
            <TextField
              type='password'
              name={'confirmPassword'}
              label='Confirm password'
              placeholder='Confirm password'
            />
            <TextField
              type='text'
              name={'companyName'}
              label={'Company name'}
              placeholder='Company name'
            />
            <TextField
              type='select'
              name='role'
              placeholder='role'
              options={[
                { name: 'Select an opion', value: '' },
                { name: 'Front-end developer', value: 'front-end' },
                { name: 'Back-end developer', value: 'back-end' },
              ]}
            />

            <TextField
              type='checkbox'
              name='agreement'
              label={<UserAgreement />}
            />

            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
