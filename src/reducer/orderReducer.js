import * as types from "../constants/ActionType"

let initialState = []

const orderList = (state = initialState, action) => {
    switch(action.type) {
        case types.ORDER_LIST: 
            return action.payload;
       
        default: return state;
    }
}

export default orderList