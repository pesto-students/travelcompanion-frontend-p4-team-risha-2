import { legacy_createStore as createStore }  from "redux"

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
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loggedInUser: [ action.payload],
            }

        default:
            return state
    }
}

export default createStore(reducer)