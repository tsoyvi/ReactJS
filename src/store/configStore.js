import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactsReducer } from "./redusers/contactsReducer";
import { chatsReducer } from "./redusers/chatsReducer";
import { catsReducer } from "./redusers/catsReducer";

import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
import thunk from "redux-thunk";

// import thunk from 'redux-thunk';




const timeout = store => next => action => {

    const delay = action?.meta?.delayMs;
    if (!delay) {
        return next(action);
    }

    const result = setTimeout(()=> next(action), delay)

    return () => {
        clearTimeout (result)
    }

}


const config = {
    key: 'root',
    storage
}



const reducer = combineReducers({
    contacts: contactsReducer,
    chats: chatsReducer,
    cats: catsReducer,
});

// const persistedReducer = persistReducer(config, reducer)

//applyMiddleware(logger)   
export const store = createStore(reducer,  applyMiddleware(thunk));
// export const persistor = persistStore(store);