import axios from "axios"
import * as types from "../constants/ActionType"
import callApi from "../utils/ApiCaller"

// export const actFetchProducts = () => (dispatch) => {
//     callApi("api/images", "GET", null).then(res => {
//         dispatch({
//             type: types.FETCH_PRODUCTS,
//             payload: res.data
//         })
//     })

// }

export const actFetchProducts = (product) => {
    return {
        type: types.FETCH_PRODUCTS,
        payload: product
    }
}

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    console.log(message)
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = (product) => {
    console.log(product)
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

// export const getVapeList = () => dispatch => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
//         dispatch({
//             type: "GET_LIST_VAPE",
//             payload: data.data
//         })
//     })
// }

// export const deteleVapeList = (id) => dispatch => {
//     dispatch({
//         type: "DELETE_LIST_VAPE",
//         payload: id
//     })
// }

// export const addVapelist = () => dispatch => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
//             dispatch({
//                 type: "ADD_LIST_VAPE",
//                 payload: [data.data[0]]
//             })
//     })
// }