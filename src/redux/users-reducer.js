import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERSCOUNT = "SET-TOTAL-USERSCOUNT";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERSCOUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERSCOUNT, count: totalCount })
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const togglefollowingProgress = (isLoading, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));

        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then((response) => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(togglefollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingProgress(true, userId));
        usersAPI.unfollow(userId).then((response) => {
            if (response.data.resultCode == 0) {
                dispatch(follow(userId));
                dispatch(togglefollowingProgress(true, userId));
            }
        });
    }
}

export default usersReducer;