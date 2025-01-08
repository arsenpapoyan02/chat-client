import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from 'redux-thunk';
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import chatReducer from "./chatReducer";
import socketReducer from "./socketReducer";

let reducers = combineReducers({
    signUp: signUpReducer,
    login: loginReducer,
    auth: authReducer,
    messages: messagesReducer,
    chat: chatReducer,
    socket: socketReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;