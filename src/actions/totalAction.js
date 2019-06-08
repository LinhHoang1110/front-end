import * as types from "../constants/ActionType"

export const actTotal = (total) => dispatch => {
    dispatch({
        type: types.TOTAL,
        payload: { total }
    })
}