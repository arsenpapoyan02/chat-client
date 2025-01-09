import React from "react";
import './login.scss';

class Login extends React.Component {
    render() {

        const changeEmailText = (e) => {
            const text = e.target.value;
            this.props.changeEmailText(text);
        }

        const changePasswordText = (e) => {
            const text = e.target.value;
            this.props.changePasswordText(text);
        }

        const isCanLogin = async () => {
            const email = this.props.emailText;
            const password = this.props.passwordText;

            if(email && password) {
                await this.props.checkLoginButton(true);
            }
            else {
                await this.props.checkLoginButton(false);
            }
            
            if(this.props.isCanLogin) {
                this.props.showLoginError(false);
                await this.props.login(email, password);
            }
            else {
                this.props.showLoginError(true);
            }
        }

        return (
            <div className="login">
                <div className="login__inner">
                    <form action="/" className="login__form">
                        <h2 className="login__title">Login</h2>
                        <div className="login__form--input email">
                            <label htmlFor="" className="form__label">Enter email</label>
                            <input type="text" className={`form__input ${typeof(this.props.error) === 'object' ? 'error' : this.props.loginError && 'error'}`} value={this.props.emailText} onChange={e => changeEmailText(e)}/>
                        </div>
                        <div className="login__form--input password">
                            <label htmlFor="" className="form__label">Enter password</label>
                            <input type="password" className={`form__input ${typeof(this.props.error) === 'object' ? 'error' : this.props.loginError && 'error'}`} value={this.props.passwordText} onChange={e => changePasswordText(e)}/>
                        </div>
                        <p className={`register__error ${this.props.loginError ? 'active' : ''}`} key={'didnt fill'}>Fill in the fields</p>
                        {
                            typeof(this.props.error) === 'object' ? <p className='register__error active'>Incorrect login or password</p>:
                            null
                        }
                        <button type="button" className="btn" onClick={isCanLogin}>Login</button>
                    </form>
                    <p className="accountAsk">
                        Don't have an account yet?
                        <a href="/sign-up" className="accountAsk--link"> Sign Up.</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Login;