import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { getMe, setAuthData } from "../../Redux/authReducer";

const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    socket: state.socket.socket
})

const ProtectedRouteContainer = connect(MapStateToProps, {getMe, setAuthData})(ProtectedRoute);

export default ProtectedRouteContainer;