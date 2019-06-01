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
        let dataDetail = []

        try {
            dataDetail = JSON.parse(localStorage.getItem('CART-SHOPPING'));
        } catch (error) {

        }

        this.state = {
            dataDetail,
        }
    }

    // componentDidMount() {
    //     callApi('api/products/order', "GET", null).then(res => {
    //         this.setState({
    //             dataDetail: res.data
    //         })
    //     })
    // }

    onDelete = (_id) => {
        let { dataDetail } = this.state
        this.setState({
            dataDetail: dataDetail.filter(el => el.product._id !== _id)
        })
        localStorage.setItem("CART-SHOPPING", JSON.stringify(dataDetail))
        console.log(dataDetail, _id)

    }

    changeQuantity = (productId, minus) => {
        const { dataDetail } = this.state;
        for (let i = 0; i < dataDetail.length; i++) {
            if (productId == dataDetail[i].product._id) {
                if (dataDetail[i].quantity > 1) {
                    if (minus) {
                        dataDetail[i].quantity -= 1
                    } else {
                        dataDetail[i].quantity += 1
                    }
                }

            }
        }

        this.setState({ dataDetail })
        localStorage.setItem("CART-SHOPPING", JSON.stringify(dataDetail))

    }

    showCartItem = (dataDetail) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
        let result = Message.MSG_CART_EMPTY;
        if (dataDetail.length > 0) {
            console.log(dataDetail)
            return (
                result = dataDetail.map((item, index) => {
                    return (
                        <CartItem key={index}
                            item={item.product}
                            quantity={item.quantity}
                            onDeleteProductInCart={onDeleteProductInCart}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                            onDelete={this.onDelete}
                            dataDetail={dataDetail}
                            changeQuantity={this.changeQuantity}
                        />
                    )
                })
            )
        }
        return result
    }

    showTotalAmount = (dataDetail) => {
        let result = null;
        if (dataDetail.length > 0) {
            result = <CartResult item={dataDetail} />
        }
        return result
    }

    render() {
        const { classes, cart } = this.props;
        const { dataDetail } = this.state;
        const { message } = cart;

        console.log(dataDetail)
        // let { data } = this.state
        // console.log(cart);
        // console.log(message);
        // console.log(data)

        return (
            <Fragment>
                <div>{message}</div>
                <Cart>
                    {this.showCartItem(dataDetail)}
                    {this.showTotalAmount(dataDetail)}
                </Cart>
            </Fragment>
        )
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