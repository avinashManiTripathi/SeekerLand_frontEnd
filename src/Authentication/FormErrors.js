import React from 'react';

export const FormErrors = ({ formError }) => (
  <div className='formErrors'>
    {Object.keys(formError).map((fieldName, i) => {
      if (formError[fieldName].length > 0) {
        return (
          <p
            key={i}
            style={{
              fontSize: '11px',
              color: 'red',
            }}>
            {fieldName} {formError[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
