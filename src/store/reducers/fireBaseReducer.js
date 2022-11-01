import { LOADING_TO_REGISTER, SUCCESS_REGISTER, ERROR_REGISTER } from "../actionTypes";
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING } from "../actionTypes";
import { LOGOUT_START, LOGOUT_ERROR, LOGOUT_SUCCESS } from "../actionTypes";
import { CHECK_AUTHED } from "../actionTypes";

import { registerError, registerStart, registerSuccess } from "../actions";
import { loginSuccess, loginStart, loginError } from "../actions";
import { logoutSuccess, logoutStart, logoutError } from "../actions";
import { checkAuthed } from "../actions";

import { auth } from '../../service/service';

const initialState = {
    loading: false,
    error: null,
    currentUser: [],
    authed: false,
}




export const fireBaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_START:
        case LOGIN_LOADING:
        case LOADING_TO_REGISTER:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_ERROR:
        case LOGOUT_ERROR:
        case ERROR_REGISTER:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case LOGIN_SUCCESS:
        case SUCCESS_REGISTER:
            return {
                ...state,
                loading: false,
                currentUser: action.payload

            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: state.currentUser = null,
            }

        case CHECK_AUTHED:
            return {
                ...state,
                authed: action.payload,
            }

        default:
            return state
    }
};


export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((e) => dispatch(registerError(e.toString())))
    }
}


// Вход
export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e)))
    }
}

// Выход
export const logoutInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(logoutStart());
        console.log('exit');
        auth
            .signOut()
            .then(() => {
                dispatch(logoutSuccess())
            })
            .catch((e) => dispatch(logoutError(e)))
    }
}


// Проверка авторизации пользователя после перезагрузки страницы
export const checkAuthedInitiate = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(checkAuthed(user));
                dispatch(loginSuccess(user));
            } else {
                //dispatch('Ошибка при проверке авторизации')
            }
        })
    }
}