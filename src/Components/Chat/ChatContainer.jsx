import { connect } from "react-redux";
import Chat from "./Chat";
import { changeText } from "../../Redux/chatReducer";
import { sendMessage, removeMessageById } from '../../Redux/messagesReducer';

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    messages: state.messages.messages,
    text: state.chat.text,
    socket: state.socket.socket
})

const ChatContainer = connect(mapStateToProps, { changeText, sendMessage, removeMessageById })(Chat);

export default ChatContainer;