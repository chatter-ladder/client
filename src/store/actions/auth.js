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
                console.log(error.response)
                dispatch(authFail(error.response.data.error))
            })
    }
}

export const authLogin = (userDetails) => {
    return dispatch => {
        axios.post('users/login', userDetails)
            .then(response => {
                console.log(response)
                dispatch(authSuccess(response.data.accessToken, response.data.userId))
            })
            .catch(error => {
                console.log(error.response)
                dispatch(authFail(error.response.data.error))
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