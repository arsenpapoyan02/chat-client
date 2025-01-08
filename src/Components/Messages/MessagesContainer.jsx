import { connect } from 'react-redux';
import Messages from './Messages';
import { getMessages, socketMessageReceived, socketRemoveMessage } from '../../Redux/messagesReducer';

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    socket: state.socket.socket
})
const MessagesContainer = connect(mapStateToProps, {getMessages, socketMessageReceived, socketRemoveMessage})(Messages);

export default MessagesContainer;
