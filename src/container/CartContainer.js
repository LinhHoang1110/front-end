import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CartItem from "../component/CartItem";
import Cart from "../component/Cart";
import CartResult from "../component/CartResult"
import * as Message from "../constants/Message";
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from "../actions/vapeActions"
import callApi from "../utils/ApiCaller"

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
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        callApi('api/images', "GET", null).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    onDelete = (_id) => {
        let { data } = this.state
        callApi(`api/images/${_id}`, "DELETE", null).then(res => {
            this.setState({
                data: data.filter( el => el._id !== _id )
            })
        })
        
    }

    render() {
        const { classes } = this.props;
        const { cart } = this.props;
        const { message } = cart;
        let { data } = this.state
        console.log(cart);
        console.log(message)

        return (
            <Fragment>
                <div>{message}</div>
                <Cart>
                    {this.showCartItem(data)}
                    {this.showTotalAmount(data)}
                </Cart>
            </Fragment>
        )
    }

    showCartItem = (data) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
        let result = Message.MSG_CART_EMPTY;
        if (data.length > 0) {
            console.log(data)
            return (
                result = data.map((item, index) => {
                    return (
                        <CartItem key={index}
                            item={item}
                            onDeleteProductInCart={onDeleteProductInCart}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                            onDelete={this.onDelete}
                        />
                    )
                })
            )
        }
        return result
    }

    showTotalAmount = (data) => {
        let result = null;
        if (data.length > 0) {
            result = <CartResult item={data} />
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
        onDeleteProductInCart: (item) => {
            dispatch(actDeleteProductInCart(item))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (item, quantity) => {
            dispatch(actUpdateProductInCart(item, quantity))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CartContainer));