import * as types from "../constants/ActionType"

let initialState = []

export default (state = initialState, actions) => {
    switch (actions.type) {
        case types.COMMENT_USER:
            return actions.payload;

        default:
            return state;
    }
}