import * as types from "../constants/ActionType"


export const actOrderList = (orderList) => dispatch => {
    dispatch({
        type: types.ORDER_LIST,
        payload: { orderList }
    })
}