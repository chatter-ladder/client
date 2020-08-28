import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';

class Login extends Component {

    state = {
        controls: {
            email: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    onChangeHandler = (event, formElement) => {
        const updatedControls = {
            ...this.state.controls,
            [formElement]: {
                ...this.state.controls[formElement],
                value: event.target.value,
                // valid: this.checkValidity(event.target.value, this.state.controls[formElement].validation),
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
                        className='placeholder'
                        type='email'
                        name='email'
                        placeholder='Enter email address'
                        value={this.state.controls.email.value}
                        onChange={(event) => this.onChangeHandler(event, 'email')}
                    />
                                    <Input 
                        className='placeholder'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={this.state.controls.password.value}
                        onChange={(event) => this.onChangeHandler(event, 'password')}
                    />
                    <button type='submit'>Log In</button>
                </form>
                <Link>Forgotten password?</Link>
                <div>Not a user? <Link to="/register">Sign up now</Link></div>
            </>
        )
    }
};

export default Login;