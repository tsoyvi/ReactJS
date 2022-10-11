import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactsReducer } from "./redusers/contactsReducer";
import { chatsReducer } from "./redusers/chatsReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import thunk from 'redux-thunk';



/*
const logger = store => next => action => {
    console.log('dispatching', action);
    console.log('before', store.getState());

    let result = next(action);

    console.log('after', store.getState());
}
*/

const config = {
    key: 'root',
    storage
}



const reducer = combineReducers({
    contacts: contactsReducer,
    chats: chatsReducer,
});

const persistedReducer = persistReducer(config, reducer)

//applyMiddleware(logger)
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);