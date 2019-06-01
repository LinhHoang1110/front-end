import { combineReducers } from "redux";
import VapeProducts from "./VapeProducts";
import cart from "./cart";
import userReducer from "./userReducer";
import message from "./message"

export default combineReducers({
    VapeProducts,
    userReducer,
    cart,
    message
})