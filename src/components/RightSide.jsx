import React from 'react';
import { FormikControl } from './FormikControl';

export const RightSide = () => {
  return (
    <div className='right-side'>
      <div className='inner-container'>
        <h1>Set up your Hub account</h1>
        <h5 className='subtitle'>
          You have been invited on Hub for collaborating
        </h5>

        <FormikControl />
      </div>
    </div>
  );
};
