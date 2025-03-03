import { LOGIN, LOGOUT } from "../type/types";

const initialAuthState = { isAuthenticated: false };

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN: return { isAuthenticated: true };

        case LOGOUT: return { isAuthenticated: false };

        default: return state;
    }
}

export default authReducer;
