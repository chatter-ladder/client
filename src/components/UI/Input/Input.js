import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {

    let inputClasses = [classes.InputElement]
    let validationError = null;
    if (props.invalid) {
      inputClasses.push(classes.Invalid)
      validationError = <p className='validation'>Please enter a valid {props.name}</p>
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