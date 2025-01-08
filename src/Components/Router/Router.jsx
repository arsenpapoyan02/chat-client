import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App/App";
import LoginContainer from "../Login/LoginContainer";
import SignUpContainer from "../SignUp/SignUpContainer";

class Router extends React.Component {

    componentDidMount() {
        this.props.getMe();
        this.props.getSocket(this.props.socket);
    }
    
    render() {
        
        const isAuth = this.props.isAuth;

        return (
            <BrowserRouter>
                <Routes>
                    <Route 
                        exact
                        path="/" 
                        element={
                            !isAuth ? (<Navigate replace to='/login'/>) : <App socket={this.props.socket}/>
                        }/>
                    <Route 
                        path="/login"
                        element={
                            isAuth ? (<Navigate replace to='/'/>) : <LoginContainer/>
                        }/>
                    <Route 
                        path="/sign-up" 
                        element={
                            isAuth ? (<Navigate replace to='/'/>) : <SignUpContainer/>
                        }/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;