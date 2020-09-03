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

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    };
};

export const auth = (userDetails, isRegistering) => {
    return dispatch => {
        dispatch(authStart());

        let url = 'users/login';
        if (isRegistering) {
            url = '/users/register';
        }
        axios.post(url, userDetails)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data.accessToken, response.data.userId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(error => {
            console.log(error.response)
            dispatch(authFail(error.response.data.error))
        })
    };
};