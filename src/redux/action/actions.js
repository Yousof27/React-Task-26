import { DECREMENT, INCREMENT, RESET, LOGIN, LOGOUT } from "../type/types"

export const inc = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const dec = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const login = () => {
    return {
        type: LOGIN
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}