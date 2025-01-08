import { usersApi } from "./api";

const CHANGE_NAME_TEXT = 'CHANGE-NAME-TEXT';
const CHANGE_EMAIL_TEXT = 'CHANGE-EMAIL-TEXT';
const CHANGE_PASSWORD_TEXT = 'CHANGE-PASSWORD-TEXT';
const CHANGE_CONFIRM_TEXT = 'CHANGE-CONFIRM-TEXT';
const CHECK_REGISTER_BUTTON = 'CHECK-REGISTER-BUTTON';
const SHOW_PASSWORD_ERROR = 'SHOW-PASSWORD-ERROR';
const SHOW_NAME_ERROR = 'SHOW-NAME-ERROR';
const SHOW_EMAIL_ERROR = 'SHOW-EMAIL-ERROR';

const SHOW_ERROR = 'SHOW-ERROR';

const initialState = {
    nameText: '',
    emailText: '',
    passwordText: '',
    confirmPassword: '',

    isCanRegister: false,
    error: [],
    
    nameError: false,
    emailError: false,
    passwordError: false,
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME_TEXT:
            return {
                ...state,
                nameText: action.text
            }
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
        case CHANGE_CONFIRM_TEXT:
            return {
                ...state,
                confirmPassword: action.text
            }
        case CHECK_REGISTER_BUTTON:
            return {
                ...state,
                isCanRegister: action.bool
            }
        case SHOW_PASSWORD_ERROR:
            return {
                ...state,
                passwordError: action.bool
            }
        case SHOW_ERROR:
            return {
                ...state,
                error: action.arr
            }
        case SHOW_NAME_ERROR:
            return {
                ...state,
                nameError: action.bool
            }
        case SHOW_EMAIL_ERROR:
            return {
                ...state,
                emailError: action.bool
            }
        default:
            return state;
    }
}

export const changeNameText = (text) => ({type: CHANGE_NAME_TEXT, text});
export const changeEmailText = (text) => ({type: CHANGE_EMAIL_TEXT, text});
export const changePasswordText = (text) => ({type: CHANGE_PASSWORD_TEXT, text});
export const changeConfirmText = (text) => ({type: CHANGE_CONFIRM_TEXT, text});
export const checkRegisterButton = (bool) => ({type: CHECK_REGISTER_BUTTON, bool});


export const showNameError = (bool) => ({type: SHOW_NAME_ERROR, bool});
export const showEmailError = (bool) => ({type: SHOW_EMAIL_ERROR, bool});
export const showPasswordError = (bool) => ({type: SHOW_PASSWORD_ERROR, bool});
export const showError = (arr) => ({type: SHOW_ERROR, arr});

export const register = (name, email, password) => (dispatch) => {
    return usersApi.register(name, email, password)
    .then((res) => {
        localStorage.setItem('token', res.token);
        dispatch(showError([]));
        window.location.replace("/");
    })
    .catch((err) => {
        const errData = err.response.data;
        dispatch(showError(errData));
        console.clear();
    })
}

export default signUpReducer;