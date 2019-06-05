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
        const fakeDataDetail = [...dataDetail].filter(el => el.product._id !== _id);

        this.setState({
            dataDetail: fakeDataDetail
        })
        localStorage.setItem("CART-SHOPPING", JSON.stringify(fakeDataDetail))
        // console.log(fakeDataDetail, _id)

    }

    changeQuantity = (productId, minus) => {
        const { dataDetail } = this.state;
        for (let i = 0; i < dataDetail.length; i++) {
            if (productId == dataDetail[i].product._id) {
                if (minus) {
                    if (dataDetail[i].quantity > 1) {
                        dataDetail[i].quantity -= 1;
                    }
                }
                else {
                    if (dataDetail[i].product.quantity < dataDetail[i].quantity) {
                        return alert("Số lượng sản phẩm bạn cần mua vượt quá số hàng còn trong kho ! Tạm mua từng này thôi nhé :3 ")
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
        if (dataDetail) {
            // console.log(dataDetail)
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
                            checkQuantity={this.checkQuantity}

                        />
                    )
                })
            )
        }
        return result
    }

    showTotalAmount = (dataDetail) => {
        let result = null;
        if (dataDetail) {
            result = <CartResult {...this.props} item={dataDetail} />
        }
        return result
    }

    render() {
        const { classes, cart } = this.props;
        const { dataDetail } = this.state;
        const { message } = cart;

        // console.log(dataDetail)
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