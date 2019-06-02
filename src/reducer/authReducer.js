import * as types from "../constants/ActionType"

export default (state = null, actions) => {
    switch (actions.type) {
        case types.CHECK_AUTH:
            console.log(actions.payload)
            return actions.payload;

        case types.CLEAR_AUTH: 
            return actions.payload;

        default:
            return state;
    }
}