import * as types from "../constants/ActionType"

let initialState = []

const quantityProduct = (state = initialState, action) => {
    switch(action.type) {
        case types.PROUDCT_QUANTITY: 
            return action.payload;
       
        default: return state;
    }
}

export default quantityProduct