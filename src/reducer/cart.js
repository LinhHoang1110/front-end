import * as types from "../constants/ActionType"
let data = JSON.parse(localStorage.getItem("CART"));
console.log(data);
let initialState = {
    data: data ? data : [],
    message: ""
}

const cart = (state = initialState, action) => {
    console.log(action.type);
    let { product, quantity } = action;
    let index = -1; // không tìm thấy => index = -1
    switch (action.type) {
        case types.ADD_TO_CART: {
            let { data } = state;
            index = findProductInCart(data, product)
            if (index != -1) {
                data[index].quantity += quantity
            } else {
                console.log(product, quantity)
                data = [...data, { product, quantity }]
            }
            localStorage.setItem("CART", JSON.stringify(data))
            return {
                ...state,
                data,  
            }
        }

        case types.DELETE_PRODUCT_IN_CART:
            const { data } = state;
            index = findProductInCart(data, product);
            
            //xóa product theo index
            if(index !== -1) {
                data.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(data))
            return {
                ...state,
                data: [...data]
            }


        case types.UPDATE_PRODUCT_IN_CART: {
            const { data } = state;
            index = findProductInCart(data, product);
            if(index !== -1) {
                data[index].quantity = quantity;
            }
            
            localStorage.setItem("CART", JSON.stringify(data))
            return {
                ...state,
                data
            }
        }

            
        case types.CHANGE_MESSAGE: 
            //  console.log(action)
            const { message } = action;
            console.log(message);
            return {
                ...state,
                message
            }
            
        default: 
            return state;
    }
}

let findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id == product.id) {
                index = i;
                break
            }
        }
    }
    return index
}

export default cart;