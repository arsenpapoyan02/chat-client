import React from "react";
import './header.scss';

class Header extends React.Component {
    render() {

        const logOut = () => {
            localStorage.removeItem('token');
            window.location.replace("/login");
        }

        return (
            <header className="header">
                <div className="header__inner">
                    <div className="header__inner--info">
                        <h2>Mini Chat</h2>
                    </div>
                    <div className="header__inner--right">
                        <h3 className="header__right--name">{this.props.userData.fullName}</h3>
                        <button type="button" className="btn" onClick={logOut}>Log Out</button>
                    </div>
                </div>
            </header>
        )
    }
} 

export default Header;