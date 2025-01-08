import React from 'react';
import './App.scss';
import HeaderContainer from '../Header/HeaderContainer';
import MessagesContainer from '../Messages/MessagesContainer';
import ChatContainer from '../Chat/ChatContainer';

class App extends React.Component {
    
    render() {

        localStorage.setItem('socketID', this.props.socket.id);

        return (
            <div className='app'>
                <div className="app__inner">
                    <HeaderContainer />
                    <MessagesContainer />
                    <ChatContainer />
                </div>
            </div>
        )
    }   
}

export default App;
