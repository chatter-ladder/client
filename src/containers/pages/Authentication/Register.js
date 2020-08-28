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

        if (rules.isEmail) {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = emailRegex.test(value.toLowerCase());
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid
    }

    onChangeHandler = (event, formElement) => {
        const updatedControls = {
            ...this.state.controls,
            [formElement]: {
                ...this.state.controls[formElement],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[formElement].validation),
                touched: true
            }
        }
        
        this.setState({ 
            controls: updatedControls 
        })
    }

    render () {
        return (
            <>
                <form>
                    <Input 
                        name='username'
                        placeholder='Enter a username'
                        value={this.state.username}
                        onChange={(event) => this.onChangeHandler(event, 'username')}
                        invalid={!this.state.controls.username.valid && this.state.controls.username.touched}
                    />
                    <Input 
                        name='email'
                        placeholder='Enter email address'
                        value={this.state.email}
                        onChange={(event) => this.onChangeHandler(event, 'email')}
                        invalid={!this.state.controls.email.valid && this.state.controls.email.touched}
                    />
                    <Input 
                        name='password'
                        placeholder='Enter password'
                        value={this.state.password}
                        onChange={(event) => this.onChangeHandler(event, 'password')}
                        invalid={!this.state.controls.password.valid && this.state.controls.password.touched}
                    />
                    <Input 
                        name='confirmPassword'
                        placeholder='Confirm password'
                        value={this.state.confirmPassword}
                        onChange={(event) => this.onChangeHandler(event, 'confirmPassword')}
                        invalid={!this.state.controls.confirmPassword.valid && this.state.controls.confirmPassword.touched}
                    />
                    <button type='submit'>Sign Up!</button>
                </form>
                <div>Already a user? <Link to="/login">Log in now</Link></div>
            </>
        )
    }
};

export default Register;