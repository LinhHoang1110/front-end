import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CartItem from "../component/CartItem";
import Cart from "../component/Cart";
import CartResult from "../component/CartResult"
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from "../actions/vapeActions"
import callApi from "../utils/ApiCaller"
import { actTotal } from "../actions/totalAction"

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
            console.log(error)
        }

        this.state = {
            dataDetail,
            totalProducts: 0
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
        let total = 0

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
                        dataDetail[i].quantity += 1;
                    }
                }
            }
            total += dataDetail[i].quantity * dataDetail[i].product.price
        }

        this.setState({
            dataDetail,
            totalProducts: total
        })
        localStorage.setItem("CART-SHOPPING", JSON.stringify(dataDetail))
        // this.props.actTotal(totalProducts)
        localStorage.setItem("TOTAL", total)
        console.log(this.state.totalProducts)
    }

    showCartItem = (dataDetail, totalProducts) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart, showTotalProduct } = this.props
        let result = null;
        console.log(onDeleteProductInCart)
        console.log(actTotal)
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
                            total={totalProducts}
                        />
                    )
                })
            )
        }
        return result
    }

    showTotalAmount = (dataDetail, totalProducts) => {
        
        let result = null;
        if (dataDetail) {
            // let total = 0
            // for (let i = 0; i < dataDetail.length; i++) {
            //     total += dataDetail[i].quantity * dataDetail[i].product.price
            // }
            // this.setState({
            //     totalProducts: total
            // })

            result = <CartResult {...this.props} item={dataDetail} total={totalProducts} />
        }
        return result
    }

    render() {
        const { classes, cart, totalAll } = this.props;
        const { dataDetail, totalProducts } = this.state;
        const { message } = cart;

        console.log(totalAll)

        console.log(dataDetail)
        // let { data } = this.state
        // console.log(cart);
        // console.log(message);
        // console.log(data)

        return (
            <Fragment>
                <div>{message}</div>
                <Cart>
                    {this.showCartItem(dataDetail, totalProducts)}
                    {this.showTotalAmount(dataDetail, totalProducts)}
                </Cart>
            </Fragment>
        )
    }



}

const Store = (state) => state

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
        },
    }
}

const action = {
    actTotal
}

export default withStyles(styles)(connect(Store, mapDispatchToProps)(CartContainer));