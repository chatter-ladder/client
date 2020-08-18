import React from 'react';

const Input = (props) => {

    // add logic to determine whether className should include invalid or not.

    return (
        <input 
            type='text'
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            invalid={props.invalid}
        />
    );
}

export default Input;