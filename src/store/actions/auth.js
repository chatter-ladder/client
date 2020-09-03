import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authRegister = (userDetails) => {
    return dispatch => {
        axios.post('/users/register', userDetails)
            .then(response => {
                console.log(response)
                dispatch(authSuccess(response.data.accessToken, response.data.userId))
            })
            .catch(error => {
                console.log(error.response.data.errors)
                dispatch(authFail(error.response.data.errors))
            })
    }
}

export const authLogin = (usersDetails) => {
    return dispatch => {
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
            body:JSON.stringify(usersDetails)
        })
        .then(response => {
            console.log(response)
            if (response.ok) {
                return(response.json())
            }
                throw new Error({ message: "Network response wasn't ok" })
        })
        .then(data => {
            console.log(data)
            dispatch(authSuccess(data.accessToken, data.userId))
        })
        .catch(error => {
            console.log(error)
            console.log(error.response)
            dispatch(authFail(error))
        })
    }
}


export const auth = (userDetails, isRegistering) => {
    return dispatch => {
        dispatch(authStart());

        if (isRegistering) {
            dispatch(authRegister(userDetails))
        } else {
            dispatch(authLogin(userDetails))
        }
    };
};