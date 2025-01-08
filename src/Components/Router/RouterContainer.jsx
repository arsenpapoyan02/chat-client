import { connect } from "react-redux";
import Router from "./Router";
import { getMe } from "../../Redux/authReducer";
import { getSocket } from "../../Redux/socketReducer";

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    isAuth: state.auth.isAuth
})

const RouterContainer = connect(mapStateToProps, {getMe, getSocket})(Router);

export default RouterContainer;