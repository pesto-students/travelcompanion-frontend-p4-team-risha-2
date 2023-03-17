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
        _id:"",
        name:""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loggedInUser: [action.payload],
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload.token,
                _id:action.payload._id,
                name:action.payload.name
            };
        case 'REMOVE_TOKEN':
            return {
                ...state,
                token: null,
                id:null,
            };

        default:
            return state
    }
}

export default createStore(reducer)