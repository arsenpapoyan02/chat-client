import { usersApi } from "./api";

const GET_ME = 'GET-ME';
const SET_AUTH_DATA = 'SET-AUTH-DATA';

const initialState = {
    userData: {},
    isAuth: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ME:
            return {
                ...state,
                userData: action.data,
                isAuth: action.bool
            }
        case SET_AUTH_DATA: 
            return {
                ...state,
                isAuth: action.bool,
            }
        default:
            return state;
    }
}

export const setAuthData = (bool) => ({type: SET_AUTH_DATA, bool});

export const getMe = () => (dispatch) => {
    return usersApi.getMe()
    .then(data => {
        dispatch({type: GET_ME, data, bool: true})
    })
    .catch(err => {
        dispatch({type: GET_ME, data: undefined, bool: false})
        console.clear();
    })
}

export default authReducer;