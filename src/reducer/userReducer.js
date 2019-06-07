import * as types from "../constants/ActionType"

let initialState = []

const commentUser = (state = initialState, action) => {
    switch(action.type) {
        case types.COMMENT_USER: 
            return action.payload;
       
        default: return state;
    }
}

export default commentUser