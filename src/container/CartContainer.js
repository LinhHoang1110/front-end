import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CartItem from "../component/CartItem";
import Cart from "../component/Cart";
import CartResult from "../component/CartResult"
import * as Message from "../constants/Message";
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from "../actions/vapeActions"
const styles = () => {
    return {
        containerVape: {
            display: "flex",
            flexWrap: "wrap",
            padding: "0 100px",
        }
    }
}

class CartContainer extends Component {
    render() {
        const { classes } = this.props;
        const { cart } = this.props;
        console.log(cart)

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }

    showCartItem = (cart) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
        let result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            console.log(cart)
            return (
                result = cart.map((item, index) => {
                    return (
                        <CartItem key={index} item={item} onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} onUpdateProductInCart={onUpdateProductInCart} />
                    )
                })
            )
        }
        return result
    }

    showTotalAmount = (cart) => {
        let result = null;
        if(cart.length > 0 ) {
            result = <CartResult cart={cart}/>
        }
        return result 
    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CartContainer));