import { SEND_CREATE_USER_REQUEST, RECEIVE_CREATE_USER_REQUEST } from "./actions"

const initialState = {
    userStatus: {
        loggingIn: false,
        loggedIn: false,
        loginError: false,
    }
}

export default function users(state = initialState, action){
    switch(action.type) {
        case SEND_CREATE_USER_REQUEST:
            return {
                ...state,
                loggingIn: true,
            }
        case RECEIVE_CREATE_USER_REQUEST:
            return {
                ...state,
                ...action.response,
                loggedIn: true,
                loggingIn: false,
            }
        default:
            return state;
    }
}