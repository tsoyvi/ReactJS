const initialState = {
    contacts: 0
}

  export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'increase':
            return {
                ...state,
                contacts: state.contacts + 1
            }
        case 'decrease':
            return {
                ...state,
                contacts: state.contacts - 1
            }

        default:
            return state
    }
};