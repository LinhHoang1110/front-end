import axios from 'axios'

export const commentUser = (product ) => dispatch => {
    dispatch({
        type: "ADD_USER_LIST",
        payload: "Add user"
    })
}