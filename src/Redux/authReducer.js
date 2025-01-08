import { usersApi } from "./api";

const GET_ME = 'GET-ME';

const initialState = {
    userData: {},
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ME:
            return {
                ...state,
                userData: action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const getMe = () => (dispatch) => {
    return usersApi.getMe()
    .then(data => {
        dispatch({type: GET_ME, data})
    })
    .catch(err => {
        console.clear();
    })
}

export default authReducer;