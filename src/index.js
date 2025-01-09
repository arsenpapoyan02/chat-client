import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterContainer from './Components/Router/RouterContainer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { io } from 'socket.io-client';

let socket = io('https://chat-server-zjlf.onrender.com', {
  autoConnect: true,
  reconnection: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterContainer socket={socket}/>
    </Provider>
  // </React.StrictMode>
);


reportWebVitals();
