import { usersApi } from "./api";

const GET_MESSAGES = 'GET-MESSAGES';
const SET_NEW_MESSAGE = 'SET-NEW-MESSAGE';
const SOCKET_MESSAGE_RECEIVED = 'SOCKET-MESSAGE-RECEIVED';
const REMOVE_MESSAGE_FROM_END = 'REMOVE-MESSAGE-FROM-END';

const initialState = {
    messages: []
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.data
            }
        case SET_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.data]
            }
        case SOCKET_MESSAGE_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, action.data]
            }
        case REMOVE_MESSAGE_FROM_END:
            let messages = state.messages;
            messages.shift();
            return {
                ...state,
                messages: messages
            }

        default:
            return state;
    }
}

export const socketMessageReceived = (data) => ({type: SOCKET_MESSAGE_RECEIVED, data});
export const socketRemoveMessage = () => ({type: REMOVE_MESSAGE_FROM_END}); 

export const getMessages = () => (dispatch) => {
    return usersApi.getMessages()
    .then(data => {
        dispatch({type: GET_MESSAGES, data})
    })
    .catch(err => console.log(err));
}

export const getMessageById = (id) => (dispatch) => {
    return usersApi.getMessageById(id)
    .then(data => {
        dispatch({type: SET_NEW_MESSAGE, data});
    })
    .catch(err => console.log(err));
}

export const sendMessage = (text) => (dispatch) => {
    return usersApi.sendMessage(text)
    .then(data => {
        dispatch(getMessageById(data._id));
        return data;
    })
    .catch(err => console.log(err));
}

export const removeMessageById = (id) => (dispatch) => {
    return usersApi.removeMessageById(id)
    .then(res => {
        dispatch(socketRemoveMessage());
    })
    .catch(err => console.log(err))
}

export default messagesReducer;