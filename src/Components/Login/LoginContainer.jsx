import { connect } from "react-redux";
import Login from "./Login";
import { changeEmailText, changePasswordText, checkLoginButton, showLoginError, login } from "../../Redux/loginReducer";
import { getMe } from "../../Redux/authReducer";

const mapStateToProps = (state) => ({
    emailText: state.login.emailText,
    passwordText: state.login.passwordText,

    isCanLogin: state.login.isCanLogin,
    loginError: state.login.loginError,
    error: state.login.error,

    isAuth: state.auth.isAuth
})

const LoginContainer = connect(mapStateToProps, {changeEmailText, changePasswordText, checkLoginButton, showLoginError, login, getMe})(Login);

export default LoginContainer;