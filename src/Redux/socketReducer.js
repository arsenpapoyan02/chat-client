const GET_SOCKET = 'GET-SOCKET';

const initialState = {
    socket: {},
}

const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SOCKET:
            return {
                ...state,
                socket: action.socket
            }
        default:
            return state;
    }
}

export const getSocket = (socket) => ({type: GET_SOCKET, socket});

export default socketReducer;