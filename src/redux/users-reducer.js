const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERSCOUNT = "SET-TOTAL-USERSCOUNT";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
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
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERSCOUNT, count: totalCount})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})

export default usersReducer;