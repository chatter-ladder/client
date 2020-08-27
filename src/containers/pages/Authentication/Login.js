import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Input from '../../../components/UI/Input/Input';

class Register extends Component {

    state = {
        email: '',
        password: '',
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
                </form>
                <Link>Forgotten password?</Link>
            </>
        )
    }
};

export default Register;