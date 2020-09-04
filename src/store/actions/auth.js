import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    accessToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logoutComplete = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const logout = () => {
  return (dispatch) => {
    // Need to also send refreshToken to server to remove from db
    const refreshToken = {
      token: localStorage.getItem("refreshToken"),
    };
    console.log(refreshToken);
    axios
      .delete("/users/logout", {
        params: refreshToken,
      })
      .then((response) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expirationDate");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        dispatch(logoutComplete());
      })
      .catch((error) => console.log(error));
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (userDetails, isRegistering) => {
  return (dispatch) => {
    dispatch(authStart());

    let url = "users/login";
    if (isRegistering) {
      url = "/users/register";
    }
    axios
      .post(url, userDetails)
      .then((response) => {
        console.log(response);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("userId", response.data.userId);
        dispatch(authSuccess(response.data.accessToken, response.data.userId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(accessToken, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
