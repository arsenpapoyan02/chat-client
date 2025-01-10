import React from "react";
import './loader.scss';

class Loader extends React.Component {
    render() {
        return(
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        )
    }
}

export default Loader;