import React, { Component } from "react";
import { withStyles } from '@material-ui/core';
import * as Message from "../../constants/Message";
import * as Config from "../../constants/Config"
import callApi from "../../utils/ApiCaller";


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
            // margin: "0 10px 0 0",
            width: "39.11px",
            height: "20px",
            borderRadius: "99999999px",
            padding: "0 0 25px 0 "
        },
        number: {
            // margin: "15px 20px 0 12px",
            textAlign: "center",
            fontSize: "15px"
        },
        btnMinus: {
            // margin: "0 10px",
            width: "39.11px",
            height: "20px",
            borderRadius: "99999999px",
            padding: "0 0 25px 0 "
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
    }

    render() {
        const { classes, item, quantity, changeQuantity } = this.props;
        // const { dataDetail } = this.props
        // console.log(dataDetail)
        console.log(quantity)
        console.log(item);
        // let { quantity } = item.quantity > 0 ? item : this.state;
        // console.log(quantity)
        console.log(item.price)
        
        return (

            <tr>
                <td>
                    <div className={classes.imgInfor}>
                        { /* fake data nên image = imageUrl */}
                        <img style={{ width: '100% ' }} src={item.imgUrl}></img>
                    </div>
                </td>
                <td>
                { /* fake data nên name = title */}
                    <strong style={{ margin: "0 0 0 30px", fontFamily: "Consolas" }}>{item.name}</strong>
                    <div>
                        <a style={{ color: "red", cursor: "pointer" }} onClick={() => this.onDelete(item._id)} >Remove</a>
                    </div>
                </td>
                <td>
                    <div>
                        - bảo hành 3 tháng
                     </div>
                    <div>
                        - free ship toàn quốc
                 </div>
                </td>
                <td>
                { /* fake data nên price = view */}
                    {parseInt(item.price).toLocaleString('us')}$
                </td>
                <td>
                { /* fake data nên quantity = view */}

                    <button className={classes.btnMinus} onClick={() => changeQuantity(item._id, true)}>-</button>
                    <p className={classes.number}>{this.props.quantity}</p>
                    <button className={classes.btnPlus} onClick={() => changeQuantity(item._id)}>+</button>
                </td>
                <td>
                    {this.showSubTotal(item.price, this.props.quantity).toLocaleString('us')}$
                </td>
            </tr>
        )
    }

    onDelete(_id) {
        if(confirm(`Nỡ lòng nào bạn lại muốn xóa sản phẩm này sao :( `)) { // eslint-disable-line
            this.props.onDelete(_id)
            let { onChangeMessage } = this.props;
            onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
        }
        // let { onDeleteProductInCart, onChangeMessage } = this.props;
        // onDeleteProductInCart(product);
        // onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    showSubTotal = (price, quantity) => {
        console.log(parseFloat(price) * quantity)
        return parseInt(price) * quantity
    }
}

export default withStyles(Styles)(CartItem)