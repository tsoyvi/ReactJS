import { LOADING_TO_REGISTER, SUCCESS_REGISTER, ERROR_REGISTER } from "../actionTypes";
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING } from "../actionTypes";
import { LOGOUT_START, LOGOUT_ERROR, LOGOUT_SUCCESS } from "../actionTypes";

import { registerError, registerStart, registerSuccess } from "../actions";
import { loginSuccess, loginStart, loginError } from "../actions";
import { logoutSuccess, logoutStart, logoutError } from "../actions";

import { auth } from '../../servise/firebase';

const initialState = {
    loading: false,
    error: null,
    currentUser: null,
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
        auth
            .signOut()
            .then(() => {
                dispatch(logoutSuccess())
            })
            .catch((e) => dispatch(logoutError(e)))
    }
}