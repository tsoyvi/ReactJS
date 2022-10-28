const initialState = {
    chats:
        [
            {
                id: 1,
                name: 'Общий',
                messages: [{ id: 1, text: "Добро пожаловать в Общий чат", author: '' }],
            },
            {
                id: 2,
                name: 'Закрытый',
                messages: [{ id: 1, text: "Добро пожаловать в Закрытый чат", author: '' }],
            }
        ]
}


function lastId(array) {
    let lastId = array[array.length - 1].id;
    return ++lastId;
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'addChat':
            const obj = {
                id: lastId(state.chats),
                name: action.payload,
                messages: [{ id: 1, text: `Добро пожаловать в ${action.payload} чат`, author: '' }],
            };
            return {
                ...state,
                chats: [...state.chats, obj],
            }

        case 'addMessage': {

            const newId = lastId(state.chats[action.index].messages);

            const messageObj = { id: newId, text: action.messageText, author: action.messageAuthor };

            const newChats = [...state.chats];
            newChats[action.index].messages.push(messageObj);

            return {
                ...state,
                chats: newChats
            }
        }

        case 'delMessage': {
            const newChats = [...state.chats];
            newChats[action.index].messages = newChats[action.index].messages.filter((item) => item.id !== action.idMessage)

            return {
                ...state,
                chats: newChats
            }
        }


        default:
            return state
    }
};