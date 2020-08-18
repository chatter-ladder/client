import React from 'react';

const Input = (props) => {

    // add logic to determine whether className should include invalid or not.

    let inputClassesWord = ['inputElement']
    let validationErrorWord = null;
    if (props.invalid) {
      inputClassesWord.push('invalid')
      validationErrorWord = <p className='validation'>Please enter a valid word</p>
    }

    return (
        <>
            <input 
                type='text'
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            {validationErrorWord}
        </>

    );
}

export default Input;