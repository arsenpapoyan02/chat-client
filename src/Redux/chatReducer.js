const CHANGE_TEXT = 'CHANGE-TEXT';

const initialState = {
    text: '',
}

const chatReducer = (state = initialState, action) => {
    // debugger;   
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }

        default:
            return state;
    }
}

export const changeText = (text) => ({type: CHANGE_TEXT, text});


export default chatReducer;