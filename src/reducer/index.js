import { combineReducers } from "redux";
import VapeProducts from "./vapeProducts";
import cart from "./cart";
import userReducer from "./userReducer";
import message from "./message"

export default combineReducers({
    VapeProducts,
    userReducer,
    cart,
    message
})