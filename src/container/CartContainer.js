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
            totalProducts: JSON.parse(localStorage.getItem('TOTAL'))
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
        let total = JSON.parse(localStorage.getItem("TOTAL"))
        let { dataDetail, totalProducts } = this.state
        const totalData = [...dataDetail].filter(el => el.product._id === _id)
        console.log((totalData[0].product.price * totalData[0].quantity))
        
        const fakeDataDetail = [...dataDetail].filter(el => el.product._id !== _id);

        this.setState({
            dataDetail: fakeDataDetail,
        })

        localStorage.setItem("CART-SHOPPING", JSON.stringify(fakeDataDetail))
        localStorage.setItem("TOTAL", total-=(totalData[0].product.price * totalData[0].quantity))
        console.log(fakeDataDetail)
    }

    totalAll = (dataDetail) => {
        let sum = 0;
        for(let i = 0; i < dataDetail.length; i ++) {
            sum += (dataDetail[i].product.price * dataDetail[i].quantity)
        }
        return sum;
    }

    changeQuantity = (productId, minus) => {
        const { dataDetail, totalProducts } = this.state;
        let total = 0

        for (let i = 0; i < dataDetail.length; i++) {
            if (productId == dataDetail[i].product._id) {
                if (minus) {
                    if (dataDetail[i].quantity > 1) {
                        dataDetail[i].quantity -= 1;
                    }
                    total -= (dataDetail[i].product.price)
                }
                else {
                    if (dataDetail[i].product.quantity < dataDetail[i].quantity) {
                        return alert("Số lượng sản phẩm bạn cần mua vượt quá số hàng còn trong kho ! Tạm mua từng này thôi nhé :3 ")
                    } else {
                        dataDetail[i].quantity += 1;
                    }
                    total += (dataDetail[i].product.price)

                }
            }
            total += dataDetail[i].quantity * dataDetail[i].product.price
        }

        this.setState({
            dataDetail,
            // totalProducts: this.totalAll(this.state.dataDetail)
        }, () => {
            console.log(dataDetail);
            localStorage.setItem("CART-SHOPPING", JSON.stringify(dataDetail));
            console.log(this.state.totalProducts)
            // localStorage.setItem("TOTAL", this.state.totalProducts)
            // console.log(this.state.totalProducts)
        })
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
        const { dataDetail } = this.state;
        const { message } = cart;

        const totalProducts = this.totalAll(dataDetail);

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