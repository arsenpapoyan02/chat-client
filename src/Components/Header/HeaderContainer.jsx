import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const HeaderContainer = connect(mapStateToProps, {})(Header);
export default HeaderContainer;