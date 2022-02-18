// Packages
import { createStore, compose } from 'redux';

const initialState = {   
    users: [

    ],
    isLoading: false,
    errorMessage: null,
    modalIsVisible: false
}

const userReducer = (state = initialState, action) => {
    
    const newUser = {
        ...state,
        users: 
        [ 
            ...state.users, 
            {
                id: state.users.length > 0 && state.users[state.users.length-1].id + 1,
                ...action.user
            }
        ]
    }

    const toggleModal = {
        ...state,
        modalIsVisible: !state.modalIsVisible   
    }
    
    const deleteUser = {
        ...state,
        users:  state.users.filter(
            (user) => user.id !== action.id
        )
    }    

    const getAllUsers = {
        ...state,
        users: action.payload,
        errorMessage: null,
    }

    const getError = {
        ...state,
        errorMessage: action.payload,
    }

    const actionType = {
        "NEW_USER": newUser,
        "DELETE_USER": deleteUser,
        "GET_USER": getAllUsers,
        "GET_ERROR": getError,
        "TOGGLE_MODAL": toggleModal
    }

    return actionType[action.type] || initialState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, initialState, composeEnhancers());

export default store;