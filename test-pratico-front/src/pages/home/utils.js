// Utils
import apiClient from "../../utils/client";

export const getUserList = (dispatch) => {
    apiClient().get("users")
        .then((response) => dispatch({ type: "GET_USER", payload: response.data }))
        .catch((error) => dispatch({ type: "GET_ERROR", payload: error.message }));
}

export const handleNewUser = (dispatch, values) => {
    apiClient().get("users")
        .then(() =>  dispatch({ type: "NEW_USER", user: values}))
        .catch((error) => dispatch({ type: "GET_ERROR", payload: error.message }));
   
    dispatch({ type: "TOGGLE_MODAL"});
}

export const handleDeleteUser = (dispatch, values) => {
    const { id } = values;

    apiClient().get("users")
        .then(() =>  dispatch({ type: 'DELETE_USER', id: id }))
        .catch((error) => dispatch({ type: "GET_ERROR", payload: error.message }));    
}

export const handleCancel = (dispatch) => {
    dispatch({ type: "TOGGLE_MODAL"});
}