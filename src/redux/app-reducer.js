import { getAuthUserData } from "./auth-reducer";

const INIYIALIZED_SUCCESS = 'INIYIALIZED_SUCCESS'


let initialState = {
    initialized: false
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INIYIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INIYIALIZED_SUCCESS})
export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()))
}


export default appReducer;