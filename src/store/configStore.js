import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactsReducer } from "./reducers/contactsReducer";
import { chatsReducer } from "./reducers/chatsReducer";
import { catsReducer } from "./reducers/catsReducer";
import { fireBaseReducer} from "./reducers/fireBaseReducer";

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
    fireBase: fireBaseReducer,
});

// const persistedReducer = persistReducer(config, reducer)

//applyMiddleware(logger)   
export const store = createStore(reducer,  applyMiddleware(thunk));
// export const persistor = persistStore(store);