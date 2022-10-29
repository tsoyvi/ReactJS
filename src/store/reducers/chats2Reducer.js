import { CHANGE_MESSAGES, CHANGE_CHATS } from "../actionTypes";


const initialState = {
    messages: { messages: [] },
    chats: { chats: [] },
}



export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGES: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: action.payload.messages,
                },
            };
        }
        default:
            return state;
    }
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHATS: {
            return {
                ...state,
                chats: {
                    ...state.chats,
                    chats: action.payload.chats,
                },
            };
        }
        default:
            return state;
    }
};
