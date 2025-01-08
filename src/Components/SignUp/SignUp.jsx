import React from "react";
import '../Login/login.scss';
import { Link } from 'react-router';

class SignUp extends React.Component {
    render() {

        const changeNameText = (e) => {
            const text = e.target.value
            this.props.changeNameText(text);
        }

        const changeEmailText = (e) => {
            const text = e.target.value
            this.props.changeEmailText(text);
        }

        const changePasswordText = (e) => {
            const text = e.target.value
            this.props.changePasswordText(text);
        }

        const changeConfirmText = (e) => {
            const text = e.target.value
            this.props.changeConfirmText(text);
        }

        const isCanRegister = async () => {
            const name = this.props.nameText;
            const email = this.props.emailText;
            const password = this.props.passwordText;
            const confirm = this.props.confirmPassword;
            const confirmPasswordBool = password !== '' && confirm !== '' && password === confirm ? true : false;

            if(name && email && password && confirm && confirmPasswordBool) {
                await this.props.checkRegisterButton(true);
                this.props.showError([]);
            }
            else {
                await this.props.checkRegisterButton(false);
            }

            if(email === '') {
                this.props.showEmailError(true);
            }
            else {
                this.props.showEmailError(false);
            }

            if(name === '') {
                this.props.showNameError(true);
            }
            else {
                this.props.showNameError(false);
            }

            if(password === '') {
                this.props.showPasswordError(true);
            }
            else {
                this.props.showPasswordError(false);
            }
            
            if(this.props.isCanRegister) {
                this.props.showPasswordError(false);
                await this.props.register(name, email, password);
            }
            else {
                this.props.showPasswordError(true);
            }
        }

        // Create template of helper to register

        return (
            <div className="login">
                <div className="login__inner">
                    <form action="/" className="login__form">
                        <h2 className="login__title">Sign Up</h2>
                        <div className="login__form--input name">
                            <label htmlFor="" className="form__label">Enter name</label>
                            <input type="text" className={`form__input ${this.props.nameError && 'error'}`} value={this.props.nameText} onChange={e => changeNameText(e)}/>
                        </div>
                        <div className="login__form--input email">
                            <label htmlFor="" className="form__label">Enter email</label>
                            <input type="text" className={`form__input ${this.props.emailError && 'error'}`} value={this.props.emailText} onChange={e => changeEmailText(e)}/>
                        </div>
                        <div className="login__form--input password">
                            <label htmlFor="" className="form__label">Enter password</label>
                            <input type="password" className={`form__input ${this.props.passwordError && 'error'}`} value={this.props.passwordText} onChange={e => changePasswordText(e)}/>
                        </div>
                        <div className="login__form--input confirm">
                            <label htmlFor="" className="form__label">Confirm password</label>
                            <input type="password" className={`form__input ${this.props.passwordError && 'error'}`} value={this.props.confirmText} onChange={e => changeConfirmText(e)}/>
                        </div>
                        <p className={`register__error name ${this.props.nameError ? 'active' : ''}`} key={'passwordError'}>Name can't be empty</p>
                        <p className={`register__error email ${this.props.emailError ? 'active' : ''}`} key={'passwordError'}>Email can't be empty</p>
                        <p className={`register__error password ${this.props.passwordError ? 'active' : ''}`} key={'passwordError'}>Password can't be empty</p>
                        {
                            Object.values(this.props.error).map(key => {
                                return <p className='register__error active' key={key.path === undefined ? '1' : key.path}>
                                            {
                                                key.path === 'fullName' ? 'Fullname length must be min. 3 symbols' :
                                                key.path === 'email' ? 'Wrong email' :
                                                key.path === 'password' ? 'Password length must be min. 5 symbols' : 'Something gone wrong'
                                            }
                                        </p>
                            })
                        }
                        <button type="button" className="btn" onClick={isCanRegister}>Register</button>
                    </form>
                    <p className="accountAsk">
                        Have an account?
                        <Link to="/login" className="accountAsk--link"> Login.</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default SignUp;