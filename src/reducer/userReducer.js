export default (state = null, actions) => {
    switch (actions.type) {
        case "ADD_USER_LIST":
            return actions.payload;


        default:
            return state;
    }
}