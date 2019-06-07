import axios from 'axios'
import * as types from "../constants/ActionType"
import callApi from "../utils/ApiCaller"

export const actCommentUser = (comment) => dispatch => {
    dispatch({
        type: types.COMMENT_USER,
        payload: { comment }
    })

}