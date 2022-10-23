import { LOADING_TO_REGISTER, SUCCESS_REGISTER, ERROR_REGISTER, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_ERROR } from "./actionTypes";
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionTypes";
import { CHECK_AUTHED } from "./actionTypes";


export const registerStart = () => ({
    type: LOADING_TO_REGISTER
})

export const registerError  = (e) => ({
    type: ERROR_REGISTER,
    payload: e.toString()
})

export const registerSuccess = (user) => ({
    type: SUCCESS_REGISTER,
    payload: user
})

//
export const loginStart = () => ({
    type: LOGIN_LOADING,
})

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const loginError = (e) => ({
    type: LOGIN_ERROR,
    payload: e.toString()
})


// Выход
export const logoutStart = () => ({
    type: LOGOUT_START,
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
})

export const logoutError = (e) => ({
    type: LOGOUT_ERROR,
    payload: e.toString()
})

// Проверка авторизации пользователя
export const checkAuthed = (status) => ({
    type: CHECK_AUTHED,
    payload: status
})
