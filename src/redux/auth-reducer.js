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
                ...action.data,
                isAuth: true
            };
        
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATE, data: {userId, email, login} })
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then((response) => {
        // debugger;
          if (response.data.resultCode === 0) {
            console.log(response.data);
            let { email, id, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login));
          }
        });
}

export default authReducer;