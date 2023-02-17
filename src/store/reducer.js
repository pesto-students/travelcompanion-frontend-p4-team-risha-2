import { legacy_createStore as createStore } from "redux"

const initialState = {
    users: [],
    loggedInUser: {
        id: null,
        email: "@gmail.com",
    },
    Prefernces: [{
        name: null,
        email: "",
        phone: "",
        Iam: "",
        location: "",
        gender: "",
    }],
        token: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            debugger
            return {
                ...state,
                loggedInUser: [action.payload],
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload.token,
            };
        case 'REMOVE_TOKEN':
            debugger
            return {
                ...state,
                token: null,
            };

        default:
            return state
    }
}

export default createStore(reducer)