import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/Input';

class Login extends Component {

    state = {
        controls: {
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

    submitHandler = (event) => {
        event.preventDefault();
        
        const usersDetails = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
          }

        this.props.onAuth(
            usersDetails,
            true
        )
        
      
        //   fetch('http://localhost:3001/users/login', {
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
        //     body:JSON.stringify(usersDetails)
        //   })
        //   .then(response => {
        //     console.log(response)
        //     if (response.ok) {
        //       return(response.json())
        //     }
        //     throw new Error("Network response wasn't ok")
        //   })
        //   .then(data => {
        //     console.log(data)
        //   })
    }

    render () {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <Input 
                        type='email'
                        name='email'
                        placeholder='Enter email address'
                        value={this.state.controls.email.value}
                        onChange={(event) => this.onChangeHandler(event, 'email')}
                        invalid={!this.state.controls.email.valid && this.state.controls.email.touched}
                    />
                    <Input 
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={this.state.controls.password.value}
                        onChange={(event) => this.onChangeHandler(event, 'password')}
                        invalid={!this.state.controls.password.valid && this.state.controls.password.touched}
                    />
                    <button type='submit'>Log In</button>
                </form>
                <Link>Forgotten password?</Link>
                <div>Not a user? <Link to="/register">Sign up now</Link></div>
            </>
        )
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (usersDetails, isRegistering) => dispatch(actions.auth(usersDetails, isRegistering))
    }
}

export default connect(null, mapDispatchToProps)(Login);