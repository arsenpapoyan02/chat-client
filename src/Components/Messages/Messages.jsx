import React from "react";
import './messages.scss';

class Messages extends React.Component {

    componentDidMount() {
        this.props.getMessages();
        let dialogs = document.querySelector(".messages__inner");
        let dialogsHeight = dialogs.scrollHeight;
        dialogs.scrollTo({top: dialogsHeight, behavior: 'auto'});
        this.props.socket.on('message', (data) => {
            this.props.socketMessageReceived(data);
            this.props.socketRemoveMessage();
        })
    }
    
    componentDidUpdate() {
        let dialogs = document.querySelector(".messages__inner");
        let dialogsHeight = dialogs.scrollHeight;
        dialogs.scrollTo({top: dialogsHeight, behavior: 'auto'});
    }

    componentWillUnmount() {
        this.props.socket.off('message');
    }

    render() {

        return (
            <div className="messages">
                <div className="messages__inner">
                    {
                        this.props.messages.map(item => {
                            return <div className="messsages__item" key={item._id}>
                                        <p className="messsages__item--username">User {item.user.fullName}</p> 
                                        <p className="messsages__item--text">{item.text}</p>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Messages;