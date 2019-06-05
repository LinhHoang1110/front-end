import * as types from "../constants/ActionType"

// export default (state = null, actions) => {
//     switch (actions.type) {
//         case "GET_LIST_VAPE":
//             return actions.payload;
    
//         case "DELETE_LIST_VAPE":
//             const id = actions.payload;
//             return state.filter(el => el.id !== id)

//         case "ADD_LIST_VAPE": 
//             return actions.payload

//         default:
//             return state;
//     }
// }

let initialState = []

const VapeProducts = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_PRODUCTS: 
            // state = action.VapeProducts;
            // console.log(action.VapeProducts)
            // console.log(state)
            // console.log(action)
            return action.payload;
       
        case types.SEARCH_PRODUCT_KEY:
            return action.payload
        
        case types.SEARCH_PRODUCT_CATERORY: 
            // console.log(action)
            return action.payload

        case types.SEARCH_PRODUCT_BRAND: 
            // console.log(action)
            return action.payload
            
        case types.SEARCH_PRODUCT_ID: 
            // console.log(action)
            return action.payload

        default: return state;
    }
}

export default VapeProducts