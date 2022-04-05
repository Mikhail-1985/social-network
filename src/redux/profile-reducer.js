import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFOLE = "profile/SET-USER-PROFOLE";
const SET_STATUS = "profile/SET-STATUS";
const DELETE_POST = "profile/DELETE_POST";

let initialState = {
    posts: [
        { id: 1, message: 'Hello', like: 15 },
        { id: 2, message: 'How are you?', like: 11 },
        { id: 3, message: 'I am Ok', like: 12 }
    ],
    newPostText: 'Hello!',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id != action.postId)],
            }
        }
        case SET_USER_PROFOLE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFOLE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    if (response) {
        dispatch(setUserProfile(response.data));
    }
}
export const getStatus = (userId) => async (dispatch) => {
    // debugger;
    let response = await profileAPI.getStatus(userId);
    if (response) {
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;