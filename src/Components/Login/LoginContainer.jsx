import { connect } from "react-redux";
import Login from "./Login";
import { changeEmailText, changePasswordText, checkLoginButton, showLoginError, login } from "../../Redux/loginReducer";

const mapStateToProps = (state) => ({
    emailText: state.login.emailText,
    passwordText: state.login.passwordText,

    isCanLogin: state.login.isCanLogin,
    loginError: state.login.loginError,
    error: state.login.error
})

const LoginContainer = connect(mapStateToProps, {changeEmailText, changePasswordText, checkLoginButton, showLoginError, login})(Login);

export default LoginContainer;