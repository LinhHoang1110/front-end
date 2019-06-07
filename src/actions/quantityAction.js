import * as types from "../constants/ActionType"


export const actProductQuantity = (quantity) => dispatch => {
    dispatch({
        type: types.PROUDCT_QUANTITY,
        payload: { quantity }
    })
}