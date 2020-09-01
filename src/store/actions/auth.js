import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authRegister = (usersDetails) => {
    return dispatch => {
        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
            body:JSON.stringify(usersDetails)
        })
        .then(response => {
            console.log(response)
            if (response.ok) {
                return(response.json())
            }
            throw new Error("Network response wasn't ok")
        })
        .then(data => {
            console.log(data)
            dispatch(authSuccess(data))
        })
        .catch(error => {
            console.log(error)
            dispatch(authFail())
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
            throw new Error("Network response wasn't ok")
        })
        .then(data => {
            console.log(data)
            dispatch(authSuccess(data))
        })
        .catch(error => {
            console.log(error)
            dispatch(authFail())
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