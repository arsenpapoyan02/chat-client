import React from "react";
import './chat.scss';

class Chat extends React.Component {
    render() {

        const changeText = (e) => {
            const text = e.target.value;
            this.props.changeText(text);
        }

        const sendMessage = async (e) => {
            const messages = this.props.messages;
            if ((e.type === 'keydown' && (e.code === 'Enter' || e.code === 'NumpadEnter')) || e.type === 'click') {
                const message = this.props.text;
                if (message !== '') {
                    let lastMessage = {};
                    await this.props.sendMessage(message)
                    .then(res => lastMessage = res);
                    
                    this.props.socket.emit('message', {
                        ...lastMessage,
                        user: {
                            fullName: this.props.userData.fullName,
                            email: this.props.userData.email
                        }
                    }); 

                    this.props.removeMessageById(messages[0]._id);
                    this.props.changeText('');
                }
                    
            }
            
        }

        return (
            <div className="chat">
                <div className="chat__inner">
                    <input type="text" className="chat__input" value={this.props.text} onKeyDown={e => sendMessage(e)} onChange={e => changeText(e)}/>
                    <button type="button" className="btn" onClick={sendMessage}>Send</button>
                </div>
            </div>
        )
    }
}

export default Chat;