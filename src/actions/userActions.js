import axios from 'axios'

export const addUserList = () => dispatch => {
    dispatch({
        type: "ADD_USER_LIST",
        payload: "Add user"
    })
}