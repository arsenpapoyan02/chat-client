import { connect } from 'react-redux';
import SignUp from './SignUp';
import { changeNameText, changeEmailText, changePasswordText, changeConfirmText,
    checkRegisterButton, showPasswordError, register, showError, showNameError, showEmailError} from '../../Redux/signUpReducer';
import { getMe } from '../../Redux/authReducer';

const mapStateToProps = (state) => ({
    nameText: state.signUp.nameText,
    emailText: state.signUp.emailText,
    passwordText: state.signUp.passwordText,
    confirmPassword: state.signUp.confirmPassword,

    isCanRegister: state.signUp.isCanRegister,
    nameError: state.signUp.nameError,
    emailError: state.signUp.emailError,
    passwordError: state.signUp.passwordError,
    error: state.signUp.error,

    isAuth: state.auth.isAuth

})

const SignUpContainer = connect(mapStateToProps, {changeNameText, changeEmailText, changePasswordText,
    changeConfirmText, checkRegisterButton, showPasswordError,
    register, showError, showNameError,
    showEmailError, getMe})(SignUp);

export default SignUpContainer;
