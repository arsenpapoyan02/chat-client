import { usersApi } from "./api";

const CHANGE_EMAIL_TEXT = 'CHANGE-EMAIL-TEXT';
const CHANGE_PASSWORD_TEXT = 'CHANGE-PASSWORD-TEXT';
const CHECK_LOGIN_BUTTON = 'CHECK-LOGIN-BUTTON';
const SHOW_LOGIN_ERROR = 'SHOW-LOGIN-ERROR';
const SHOW_ERROR = 'SHOW-ERROR';

const initialState = {
    emailText: '',
    passwordText: '',

    isCanLogin: false,
    loginError: false,
    error: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_EMAIL_TEXT:
            return {
                ...state,
                emailText: action.text
            }
        case CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                passwordText: action.text
            }
        case CHECK_LOGIN_BUTTON:
            return {
                ...state,
                isCanLogin: action.bool
            }
        case SHOW_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.bool
            }
        case SHOW_ERROR:
            return {
                ...state,
                error: action.err
            }
        default:
            return state;
    }
}

export const changeEmailText = (text) => ({type: CHANGE_EMAIL_TEXT, text});
export const changePasswordText = (text) => ({type: CHANGE_PASSWORD_TEXT, text});
export const checkLoginButton = (bool) => ({type: CHECK_LOGIN_BUTTON, bool});
export const showLoginError = (bool) => ({type: SHOW_LOGIN_ERROR, bool});
export const showError = (err) => ({type: SHOW_ERROR, err});

export const login = (email, password) => async (dispatch) => {
    return await usersApi.login(email, password)
    .then((res) => {
        localStorage.setItem('token', res.token);
        dispatch(showError(false));
        window.location.replace("/");
    })
    .catch((err) => {
        const error = err.response.data
        dispatch(showError(error));
        console.clear();
    })

}

export default loginReducer;