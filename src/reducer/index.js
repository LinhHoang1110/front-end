import { combineReducers } from "redux";
import VapeProducts from "./vapeProducts";
import cart from "./cart";
import userReducer from "./userReducer";
import message from "./message"
import authReducer from './authReducer'
import productQuantiy from "./productQuantiy"
import orderList from "./orderReducer"
import totalReducer from "./totalReducer"

export default combineReducers({
    VapeProducts,
    userReducer,
    cart,
    message,
    authReducer,
    productQuantiy,
    orderList,
    totalReducer
})