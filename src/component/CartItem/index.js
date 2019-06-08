import React, { Component } from "react";
import { withStyles } from '@material-ui/core';
import * as Config from "../../constants/Config"
import callApi from "../../utils/ApiCaller";
import { connect } from "react-redux"
import { actProductQuantity } from "../../actions/quantityAction"

const Styles = () => {
    return {
        containerCart: {
            display: "flex",
            padding: "20px 50px"
        },
        imgInfor: {
            display: "flex",
            width: 150,
            height: 100,
            "& > img": {
                objectFit: "cover"
            }
        },
        name: {
            margin: "0 0 0 120px",
            // width: "300px"
        },
        quantity: {
            display: "flex",
            paddingRight: "10px",
            justifyContent: "center"
        },
        btnPlus: {
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            width: "30px",
            height: "30px",
            borderRadius: "50%"
        },
        number: {
            // margin: "15px 20px 0 12px",
            textAlign: "center",
            fontSize: "15px"
        },
        btnMinus: {
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            width: "30px",
            height: "30px",
            borderRadius: "50%"
        },
        guaranteeShip: {
            margin: "0 0 0 250px",
            flexFlow: "column",
            fontFamily: "Consolas",
            width: "200px"
        },
        price: {
            margin: "0 0 0 130px",
            fontFamily: "Consolas",
        },
        sub: {}
    }
}

// let cart = [];
//         try {
//             cart = JSON.parse(localStorage.getItem("CART-SHOPPING")) || [];
//         } catch (error) {

//         }

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            productQuantity: 0
        })
    }

    render() {
        const { classes, item, quantity, changeQuantity, checkQuantity, total } = this.props;
        // const { dataDetail } = this.props
        // console.log(dataDetail)
        // console.log(quantity)
        console.log(item);
        // // let { quantity } = item.quantity > 0 ? item : this.state;
        // // console.log(quantity)
        // console.log(item.price)

        return (

            <tr style={{ marginRight: "10%" }}>
                <td style={{ width: "10%" }} >
                    <div className={classes.imgInfor}>
                        { /* fake data nên image = imageUrl */}
                        <img style={{ width: '100% ' }} src={item.imgUrl}></img>
                    </div>
                </td>
                <td style={{}}>
                    { /* fake data nên name = title */}
                    <div style={{ marginTop: "30px" }}>
                        <strong style={{}}>{item.name}</strong>
                        <div>
                            <a style={{ color: "red", cursor: "pointer" }} onClick={() => this.onDelete(item._id)} >Remove</a>
                        </div>
                    </div>

                </td>
                <td>
                    <div style={{ marginTop: "30px" }}>
                        <div>
                            - bảo hành 3 tháng
                     </div>
                        <div>
                            - free ship toàn quốc
                 </div>
                    </div>

                </td>
                <td style={{ paddingLeft: "2%" }}>
                    { /* fake data nên price = view */}
                    <div style={{ marginTop: "30px" }}>
                        {parseInt(item.price).toLocaleString('us')}$
                </div>

                </td>
                <td style={{ paddingLeft: "2%" }}>
                    { /* fake data nên quantity = view */}
                    <div style={{ display: "flex", marginTop: "30px" }}>
                        <button className={classes.btnMinus} onClick={() => changeQuantity(item._id, true)}>-</button>
                        <p style={{ margin: "0 5px" }} className={classes.number}>{quantity}</p>
                        <button className={classes.btnPlus} onClick={() => changeQuantity(item._id)}>+</button>
                    </div>

                </td>
                <td>
                    <div style={{ marginTop: "30px" }}>
                        {this.showSubTotal(item.price, this.props.quantity).toLocaleString('us')}$
                    </div>
                </td>
            </tr>
        )
    }

    onDelete(_id) {
        if (confirm(`Nỡ lòng nào bạn lại muốn xóa sản phẩm này sao :( `)) { // eslint-disable-line
            const { total, item , quantity} = this.props
            this.props.onDelete(_id)
            const shoppingCart = JSON.parse(localStorage.getItem("CART-SHOPPING"))
            this.setState({
                productQuantity: shoppingCart.length
            })
            this.props.actProductQuantity(shoppingCart.length)
            
            // onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
        }
        // let { onDeleteProductInCart, onChangeMessage } = this.props;
        // onDeleteProductInCart(product);
        // onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    showSubTotal = (price, quantity) => {
        // console.log(parseFloat(price) * quantity)
        return parseInt(price) * quantity
    }
}

const Store = (state) => state

const action = {
    actProductQuantity
}

export default withStyles(Styles)(connect(Store, action)(CartItem))