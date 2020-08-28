import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';

class Register extends Component {

    state = {
        controls: {
            username: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        // is Email

        // is minLength

        // is maxLength

        return isValid
    }

    onChangeHandler = (event, formElement) => {
        this.setState({ 
            ...this.state,
            [formElement]: event.target.value 
        })
    }

    render () {
        return (
            <>
                <form>
                    <Input 
                        className='placeholder'
                        type='text'
                        name='username'
                        placeholder='Enter a username'
                        value={this.state.username}
                        onChange={(event) => this.onChangeHandler(event, 'username')}
                    />
                                    <Input 
                        className='placeholder'
                        type='email'
                        name='email'
                        placeholder='Enter email address'
                        value={this.state.email}
                        onChange={(event) => this.onChangeHandler(event, 'email')}
                    />
                                    <Input 
                        className='placeholder'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={this.state.password}
                        onChange={(event) => this.onChangeHandler(event, 'password')}
                    />
                    <Input 
                        className='placeholder'
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm password'
                        value={this.state.confirmPassword}
                        onChange={(event) => this.onChangeHandler(event, 'confirmPassword')}
                    />
                    <button type='submit'>Sign Up!</button>
                </form>
                <div>Already a user? <Link to="/login">Log in now</Link></div>
            </>
        )
    }
};

export default Register;