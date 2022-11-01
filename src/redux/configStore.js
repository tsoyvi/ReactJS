import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./redusers/contactsReducer";
import { chatsReducer } from "./redusers/chatsReducer";


const reducer = combineReducers({
    contacts: contactsReducer,
    chats: chatsReducer,
});


export const store = createStore(reducer);