import React from "react";
import { Navigate } from "react-router";
import App from "../App/App";
import Loader from "../Loader/Loader";

class ProtectedRoute extends React.Component {

    componentDidMount() {
        this.props.getMe();
    }

    checkAuth = async () => {
        const token = localStorage.getItem('token');
    
        if (!token) {
            this.props.setAuthData(false)
          return;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.props.setAuthData(true)
        } catch {
            this.props.setAuthData(false)
        }
    };

    render() {

        if (this.props.isAuth === null) {
            return <Loader />
        }

        return this.props.isAuth ? <App socket={this.props.socket}/> : <Navigate to='/login' replace />
    }
}

export default ProtectedRoute;