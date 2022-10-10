const initialState = [
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
];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
};