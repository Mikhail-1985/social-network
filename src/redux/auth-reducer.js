import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATE = "SET-USER-DATE";
// const SET_USER_DATE = "SET-USER-DATE";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload
            };
        
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATE, payload: {userId, email, login, isAuth} })
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then((response) => {
        // debugger;
          if (response.data.resultCode === 0) {
            console.log(response.data);
            let { email, id, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
          }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
        // debugger;
          if (response.data.resultCode === 0) {
            dispatch(setAuthUserData());
          } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "something is wrong";
            dispatch(stopSubmit("login", {_error: message}))
          }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then((response) => {
        // debugger;
          if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
          }
        });
}

export default authReducer;