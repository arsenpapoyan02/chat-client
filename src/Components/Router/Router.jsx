import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import SignUpContainer from "../SignUp/SignUpContainer";
import ProtectedRouteContainer from "../ProtectedRoute/ProtectedRouteContainer";

class Router extends React.Component {

    componentDidMount() {
        this.props.getSocket(this.props.socket);
    }
    
    render() {

        return (
            <BrowserRouter>
                <Routes>
                    <Route 
                        exact
                        path="/" 
                        element={
                            <ProtectedRouteContainer>
                            </ProtectedRouteContainer>
                        }
                    />
                    <Route path="/login" element={<LoginContainer />}/>
                    <Route path="/sign-up" element={<SignUpContainer />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;