import axios from 'axios'
import * as types from "../constants/ActionType"
import callApi from "../utils/ApiCaller"

export const actCommentUser = (product, comment) => dispatch => {
    callApi("api/products/review", "GET", {
        comment: comment
    }).then( res => {
        console.log(res)
        dispatch({
            type: types.COMMENT_USER,
            payload: { product, comment}
        })
    })
    
}