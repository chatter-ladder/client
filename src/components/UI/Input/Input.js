import React from 'react';

import './Input.css';

const Input = (props) => {

    let inputClasses = ['inputElement']
    let validationError = null;
    if (props.invalid) {
      inputClasses.push('invalid')
      validationError = <p className='validation'>Please enter a valid word</p>
    }

    return (
        <>
            <input
                className={inputClasses.join(' ')}
                type='text'
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            {validationError}
        </>

    );
}

export default Input;