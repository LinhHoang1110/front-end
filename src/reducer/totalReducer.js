import * as types from "../constants/ActionType"

let initialState = []

const totalAll = (state = initialState, action) => {
    switch(action.type) {
        case types.TOTAL: 
            return action.payload;
       
        default: return state;
    }
}

export default totalAll