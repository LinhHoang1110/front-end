import axios from "axios"
import * as types from "../constants/ActionType"
import callApi from "../utils/ApiCaller"

export const actFetchProducts = () => (dispatch) => {
    callApi("api/products", "GET", null).then(res => {
        console.log(res.data)
        dispatch({
            type: types.FETCH_PRODUCTS,
            payload: res.data
        })
    })
    // axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
    //     console.log(data.data)
    //     dispatch({
    //         type: types.FETCH_PRODUCTS,
    //         payload: data.data
    //     })
    // })
}

// export const actFetchProducts = (product) => {
//     return {
//         type: types.FETCH_PRODUCTS,
//         payload: product
//     }
// }

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

export const actSearchProductkey = (product, searchString) => {
    return {
        type: types.SEARCH_PRODUCT_KEY,
        payload: product, searchString
    }
}

export const actSearchProductCaterory = (product, caterory) => dispatch => {
    callApi(`api/products?category=${caterory}`, "GET", null).then( res => {
        console.log(res)
        dispatch({
            type: types.SEARCH_PRODUCT_CATERORY,
            payload: res.data, caterory
        })
    })
}

export const actSearchProductBrand = (product, brand) => dispatch => {
    callApi(`api/products?brand=${brand}`, "GET", null).then( res => {
        console.log(res)
        dispatch({
            type: types.SEARCH_PRODUCT_BRAND,
            payload: res.data, brand
        })
    })
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